import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;