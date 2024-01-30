import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { IoHome } from "react-icons/io5";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
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
                    title: "Logout Successfully!"
                });

                navigate('/')
            })
            .catch(err => {
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
                    icon: "error",
                    title: err.message
                });

            })
    };



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-4">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                    <RiArchiveDrawerLine className="text-4xl text-purple-700" />
                </label>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-3">
                    {/* Sidebar content here */}
                    <li>
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="flex items-center gap-2 justify-start  ">
                                <img className=" w-12 h-12  rounded-full" src={user?.photoURL} alt="user photo" />
                                <div className=" text-base font-semibold">{user?.displayName}</div>
                                <FaChevronDown />
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content z-[10] p-2 shadow bg-base-100 rounded-box w-max mt-4 ">
                                <li><div>{user?.displayName}</div></li>
                                <li><div className=" font-medium truncate">{user?.email}</div></li>
                                <li>
                                    <button onClick={handleLogOut} className="block w-full px-4 py-2 text-md font-semibold text-gray-600 hover:bg-gray-100 "> Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to='/dashboard/add-task' className="text-xl text-purple-600">
                            <FiPlusCircle className="text-2xl " /> Create a new task
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/my-task'>
                            <button className="text-2xl">To-Do list</button>
                        </Link>
                    </li>
                    <div className=" divider"></div>
                    <li>
                        <Link to='/' className="flex item-center justify-start">
                            <IoHome className="text-3xl text-purple-700" />
                            <p className="text-xl font-semibold">Home</p>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;