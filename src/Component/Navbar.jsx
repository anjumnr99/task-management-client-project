import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.png'
const Navbar = () => {
    return (

        <div className="navbar bg-purple-100 bg-opacity-30   fixed z-10 px-6 py-3 ">
            <div className="navbar-start">

                <button className=" w-56">
                    <img src={logo} className="h-fit w-full" />
                </button>


            </div>

              <div className="navbar-end flex  ">
                <div className=" hidden lg:flex ">
                    <ul className="menu menu-horizontal text-center px-1">
                        <li className="text-md lg:text-xl  font-semibold text-gray-800">
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-purple-800 font-bold" : ""
                                }
                            >
                                About Us
                            </NavLink>
                        </li>


                        <li className="text-md lg:text-xl  font-semibold text-gray-800">
                            <NavLink
                                to="/feature"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " text-purple-800 font-bold" : ""
                                }
                            >
                                Feature
                            </NavLink>
                        </li>
                        <li className="text-md lg:text-xl  font-semibold text-gray-800">
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-purple-800 font-bold" : ""
                                }
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li className="text-md lg:text-xl font-semibold text-gray-800">
                            <NavLink
                                to="/pricing"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-purple-800 font-bold" : " "
                                }
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li className="text-md lg:text-xl  font-semibold text-gray-800">
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-purple-800 font-bold" : ""
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className="dropdown dropdown-bottom dropdown-end mr-4 ">
                    <label tabIndex={0} className=" lg:hidden m-1 text-4xl md:text-5xl ">
                        <GiHamburgerMenu></GiHamburgerMenu>

                    </label>
                    <ul tabIndex={0} className="menu dropdown-content z-[1]  p-2 shadow bg-base-100 rounded-box w-max md:w-52">
                        <li className="text-lg  font-semibold text-gray-800">
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-purple-800 font-bold" : ""
                                }
                            >
                                About Us
                            </NavLink>
                        </li>


                        <li className="text-lg  font-semibold text-gray-800">
                            <NavLink
                                to="/feature"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-purple-800 font-bold" : ""
                                }
                            >
                                Feature
                            </NavLink>
                        </li>
                        <li className="text-lg  font-semibold text-gray-800">
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-purple-800 font-bold" : ""
                                }
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li className="text-lg font-semibold text-gray-800">
                            <NavLink
                                to="/pricing"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " text-purple-800 font-bold" : ""
                                }
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li className="text-lg  font-semibold text-gray-800">
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-purple-800 font-bold" : ""
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Navbar;