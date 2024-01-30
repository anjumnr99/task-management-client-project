import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
    const task = useLoaderData();
    console.log(task);
    const { _id,  task_status, task_title, task_deadlines, task_description } = task || {};
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date(task_deadlines));
    const axiosPublic = useAxiosPublic();



    const handleUpdate = (e) => {
        e.preventDefault();

            const  task_status = e.target.status?.value;
            const  task_title = e.target.taskTitle?.value;
            const  task_deadlines = startDate?.toDateString() ;
            const  task_description = e.target.description?.value;
            const  user_name = user?.displayName;
            const  user_email = user?.email
        

        const updated = {
            task_status,
            task_title,
            task_deadlines,
            task_description,
            user_name,
            user_email
        }
        console.log(updated);
        axiosPublic.put(`/task/update/${_id}`, updated)
            .then(result => {
                if (result?.data.acknowledged) {
                    console.log(result.data);
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Package Updated successfully"
                    });
                }
            })
    }




    return (
        <div>
            <h1 className="text-purple-800 text-4xl font-semibold border-b-2 border-purple-300 border-dashed w-fit mx-auto mb-4 pb-2">Update task</h1>

            <form onSubmit={handleUpdate} className="border p-5 rounded-lg bg-purple-100">

                <div className="flex gap-2">
                    {/* Name */}
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Task Tile</span>

                        </label>
                        <input type="text" defaultValue={task_title} placeholder="Enter Task Tile"
                            name='taskTitle'
                            className="input input-bordered w-full " />

                    </div>
                    {/*deadlines */}
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Deadlines</span>

                        </label>
                        <div className="">
                            <DatePicker
                                showIcon
                                selected={startDate}
                                className="p-3 rounded-lg border"
                                onChange={(date) => setStartDate(date)}
                                dateFormat="MM/dd/yyyy"
                            />

                        </div>

                    </div>
                </div>
                <div className="flex items-center gap-2 justify-evenly">

                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Task Description</span>

                        </label>
                        <input type="text" defaultValue={task_description} placeholder="Enter Task Description"
                            name='description'
                            className="input input-bordered w-full " />

                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Status</span>

                        </label>
                        <select defaultValue={task_status} name="status" className="select select-bordered w-full ">
                            <option disabled value="default">Select Status</option>
                            <option value="today">Today</option>
                            <option value="moderate">Completed</option>
                            <option value="high">Upcoming</option>

                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="btn btn-outline w-full text-lg ">
                        Update
                    </button>
                </div>

            </form>

        </div>
    );
};



export default UpdateTask;