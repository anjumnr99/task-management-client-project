import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Register from "../Register/Register";
import MainLayout from "../Layout/MainLayout";
import Login from "../Login/Login";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Feature from "../Pages/Feature/Feature";
import Pricing from "../Pages/Pricing/Pricing";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import Task from "../Pages/Dashboard/Task";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <LandingPage></LandingPage>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'feature',
                element: <Feature></Feature>
            },
            {
                path: 'pricing',
                element: <Pricing></Pricing>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'add-task',
                element: <AddTask></AddTask>
            },
            {
                path: 'my-task',
                element: <PrivateRoute>
                    <Task></Task>
                </PrivateRoute>
            },
            {
                path: 'update-task/:id',
                element: <UpdateTask></UpdateTask>,
                loader: ({ params }) => fetch(`https://task-management-server-joc6mzi45-anjus-projects-6a90d7b7.vercel.app/tasks/${params.id}`)
            },
        ]
    }

]);

export default MainRouter;