import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa6";
import loginBg from '../assets/loginImg.png'
import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const { googleLogin, loginWithEmailAndPassword, gitHubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);
    //   const axiosPublic = useAxiosPublic();
    const handleGitHubLogin = () => {
        gitHubLogin()
            .then(result => {
                console.log(result);

                // const userInfo = {
                //   email: result.user?.email,
                //   name: result.user?.displayName,
                //   image: result.user?.photoURL
                // }

                // axiosPublic.post('/users', userInfo)
                //   .then(res => {
                //     console.log(res.data);
                //     navigate('/')
                //   })

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
                    title: 'Logged Successfully!'
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                // toast.error(err.message)
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

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result);

                // const userInfo = {
                //   email: result.user?.email,
                //   name: result.user?.displayName,
                //   image: result.user?.photoURL
                // }

                // axiosPublic.post('/users', userInfo)
                //   .then(res => {
                //     console.log(res.data);
                //     navigate('/')
                //   })

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
                    title: 'Login Successfully!'
                });
                navigate(location?.state ? location.state : '/dashboard/my-task')
            })
            .catch(err => {
                // toast.error(err.message)
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
    const handleLoginWithEmailAndPassword = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        loginWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
                // toast.success('Logged Successfully!')
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
                    title: "Signed in successfully"
                });
                navigate(location?.state ? location.state : '/dashboard/my-task')
            })
            .catch(err => {
                // toast.error(err.message)
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
                console.log(err);
            })


    }
    return (
        <div className="pb-20 pt-[140px] md:pt-[180px] 
        lg:pt-[100px] px-4  " style={{ backgroundImage: 'url(https://i.ibb.co/FKb4799/4062949-87399.jpg)' }}>
            <div className="md:flex-row flex flex-col-reverse items-center justify-center max-w-5xl bg-transparent shadow-2xl shadow-white md:rounded-3xl mx-auto ">
                <div className="md:w-[50%]">
                    <img src={loginBg} alt="" />
                    <div className="p-3 ">
                        <p className="text-gray-300 text-center">Uncover a realm where tasks are not just completed but conquered collaboratively. Experience the future of productivity!</p>
                    </div>
                </div>


                <div className="md:w-[50%] md:rounded-r-2xl bg-purple-200 p-4 shadow sm:p-8 ">
                    <h2 className="mb-3 text-3xl text-purple-700 font-semibold text-center">Login to your account</h2>
                    <p className="text-sm text-center text-purple-600 ">Dont have account?
                        <Link to='/register' className="focus:underline font-semibold text-purple-900 hover:underline"> Sign up here</Link>
                    </p>
                    <div className="flex items-center w-full">
                        <hr className="w-full border-purple-700  " />
                        <p className="flex-shrink-0 px-2 text-purple-800 font-semibold ">Login with</p>
                        <hr className="w-full border-purple-700 " />
                    </div>
                    <div className=" flex items-center justify-center w-full p-4 space-x-4 -mt-3  border-purple-700 border-l border-r border-b  focus:ri focus:ri dark:border-gray-400 focus:ri">
                        <button onClick={handleGoogleLogin} type="button" className=" ">
                            <FcGoogle className="text-3xl "></FcGoogle>

                        </button>
                        <button onClick={handleGitHubLogin} type="button" className=" ">
                            <FaGithub className="text-3xl " />

                        </button>

                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full border-purple-800  " />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full border-purple-800 " />
                    </div>
                    <form onSubmit={handleLoginWithEmailAndPassword} className="space-y-8">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="wxyz199@example.com" required className="w-full px-3 py-2 border rounded-md dark:border-gray-700  focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 border-purple-800 dark:bg-gray-900 dark:text-gray-100 
                                    focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</Link>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" required className="w-full px-3 py-2 border rounded-md dark:border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 border-purple-800 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md border border-purple-800 hover:border-purple-500 text-purple-600 dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                    </form>
                </div>



            </div>
        </div>
    );
};

export default Login;