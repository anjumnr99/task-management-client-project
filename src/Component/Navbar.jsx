import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.png'
const Navbar = () => {
    return (

        <div className="navbar  flex items-center justify-center bg-purple-100 bg-opacity-30 fixed z-10 px-6 py-5 ">
            <div className="navbar-center">

                <button className=" w-60 ">
                    <img src={logo} className="h-fit w-full" />
                </button>


            </div>

        </div>

    );
};

export default Navbar;