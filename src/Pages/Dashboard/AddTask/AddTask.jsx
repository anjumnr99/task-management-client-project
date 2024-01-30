import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const axiosPublic = useAxiosPublic();

    const date = new Date();
    const currentDate = date.toDateString();

    const onSubmit = (data) => {
        const taskDate = new Date(startDate.toDateString());
        let status;
        // Compare task date with current date
        if (taskDate.toDateString() === currentDate) {
            status = 'today';

        } else if (taskDate > date) {
          status = 'upcoming'

        } else {
            status= 'completed'

        }



        const newTask = {
            task_status: status,
            task_title: data.taskTitle,
            task_deadlines: startDate.toDateString(),
            task_description: data.description,
            user_name: user.displayName,
            user_email: user.email
        }
        console.log(newTask);


        axiosPublic.post('/tasks', newTask)
            .then(result => {
                if (result.data?.insertedId) {
                    reset();
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
                        title: "Package Added successfully"
                    });
                }
            })
    }

    return (
        <div>
            <h1 className="text-purple-800 text-4xl font-semibold border-b-2 border-purple-300 border-dashed w-fit mx-auto mb-4 pb-2">Create a new task</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="border p-5 rounded-lg bg-purple-100">

                <div className="flex gap-2">
                    {/* Title */}
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Task Tile</span>

                        </label>
                        <input type="text" placeholder="Enter Task Tile"
                            {...register('taskTitle', { required: true })}
                            className="input input-bordered w-full  " />

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
                                className="p-3 flex-1 rounded-lg border"
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
                        <input type="text" placeholder="Enter Task Description"
                            {...register('description', { required: true })}
                            className="input input-bordered w-full " />

                    </div>


                </div>
                <div className="flex items-center justify-center">
                    <button className="btn btn-outline w-full text-lg ">
                        Add Task
                    </button>
                </div>

            </form>

        </div>
    );
};

export default AddTask;