
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import TaskCard from "./TaskCard";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Task = () => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const date = new Date();
    const currentDate = date.toDateString();

    const { user } = useContext(AuthContext);
    console.log(user);
    const axiosPublic = useAxiosPublic();
    // const [tasks, setTasks] = useState([]);
    const todayTasks = [];
    const completedTasks = [];
    const upcomingTasks = [];

    const { data: tasks, refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/task-list?email=${user?.email}`)
            console.log(res.data);
            return res.data;
        }

    });

    // useEffect(() => {
    //     axiosPublic.get(`/tasks?email=${user?.email}`)
    //         .then(res => {
    //             console.log(res.data);
    //             setTasks(res.data);


    //         })
    // }, [axiosPublic, user?.email]);

    tasks?.forEach((task) => {
        const taskDate = new Date(task.task_deadlines);
        // Compare task date with current date
        if (taskDate.toDateString() === currentDate) {

            todayTasks.push(task);
        } else if (taskDate > date) {

            upcomingTasks.push(task);
        } else {

            completedTasks.push(task);
        }
    });

    // console.log(tasks.length !== 0 ? 'HAve task' : 'No tasks');

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-4">
                <div >
                    <h1 className="text-purple-800 text-2xl font-semibold border-b-2 border-purple-300 border-dashed w-fit mx-auto my-4 pb-2">Today</h1>
                </div>
                <div>
                    <h1 className="text-green-800 text-2xl font-semibold border-b-2 border-purple-300 border-dashed w-fit mx-auto my-4 pb-2">Completed</h1>
                </div>
                <div>
                    <h1 className="text-blue-800 text-2xl font-semibold border-b-2 border-purple-300 border-dashed w-fit mx-auto my-4 pb-2">Upcoming</h1>
                </div>
            </div>
            {
                tasks?.length !== 0 ? <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-4">

                    <div className="border bg-purple-50">


                        {

                            todayTasks?.map((task, index) => <TaskCard key={index} refetch={refetch} index={index} task={task}></TaskCard>)
                        }
                    </div>
                    <div className="border  bg-green-50">

                        <div>
                            {
                                completedTasks?.map((task, index) => <TaskCard key={index} refetch={refetch} index={index} task={task}></TaskCard>)
                            }
                        </div>
                    </div>
                    <div className="border  bg-blue-50">

                        <div>
                            {
                                upcomingTasks?.map((task, index) => <TaskCard key={index} refetch={refetch} index={index} task={task}></TaskCard>)
                            }
                        </div>
                    </div>
                </div>
                    : <Link to='/dashboard/add-task' className="text-2xl text-gray-500 flex items-center justify-center min-h-[70vh]">
                        Click to create a Task
                    </Link>
            }

        </>
    );
};

export default Task;