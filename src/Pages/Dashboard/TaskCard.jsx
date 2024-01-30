import { Link } from "react-router-dom";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Modal from 'react-modal';
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TaskCard = ({ task, index, refetch }) => {
    const { _id, task_status, task_title, task_deadlines, task_description, user_name, user_email } = task || {};
    // const [isModalOpen, setIsModalOpen] = useState(false);
   
    

    const axiosPublic = useAxiosPublic()

    const handleDelete = (id) => {
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You want remove this task!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tasks/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data?.deletedCount > 0) {
                            refetch();
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
                                title: "Removed successfully"
                            });
                        }

                    })

            }

        });

    }
    const handleMarkCompleted= (id) => {
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "Do you want mark this task as completed?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Mark as a completed!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/task/status/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.modifiedCount > 0) {
                            refetch();
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
                                title: "Marked successfully"
                            });
                        }

                    })

            }

        });

        console.log(task);

    }

    return (
        <div>
            <button className="">
                <div className="card bg-base-100 my-4 rounded-md mx-4 shadow-2xl">
                    <div className="card-body p-4 text-left">
                        <p className=" text-xl">{task_title}</p>
                        <p className="text-gray-400">{task_description}.</p>

                        <h3 >Deadline: {task_deadlines}</h3>



                    </div>
                    <div className="flex items-center justify-between px-2">
                        {
                           task_status === 'completed' ? <button disabled  className="flex items-center justify-center">
                                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                                <p className=" text-xs ml-1">Completed</p>
                            </button> : <button onClick={()=>handleMarkCompleted(_id)} className="flex items-center justify-center">
                                <IoMdCheckmarkCircleOutline className="text-2xl " />
                                <p className=" text-xs ml-1">Mark as Completed</p>
                            </button>
                        }

                        <div className=" text-end ">
                            <Link to={`/dashboard/update-task/${_id}`}>
                                <button className="mr-1"><TiEdit className="text-2xl" /></button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="mr-1"><RiDeleteBinLine className="text-2xl" /></button>

                        </div>
                    </div>

                </div>
            </button>

            {/* <Modal isOpen={isModalOpen} style={customStyles} onRequestClose={closeModal}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{task_title}</h3>
                    <h3 className="font-bold text-lg">{task_priority}</h3>
                    <p className="py-4">{task_description}</p>
                    <h3 className="text-lg"> {task_deadlines}</h3>
                    <div className="modal-action">
                     

                        <Link to={`/dashboard/update-task`}>
                            <button className="mr-1"><TiEdit className="text-3xl" /></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="mr-1"><RiDeleteBinLine className="text-3xl" /></button>
                        <button onClick={closeModal} className=""><IoCloseSharp className="text-3xl" /></button>
                    </div>
                </div>
            </Modal> */}
        </div>
    );
};

export default TaskCard;