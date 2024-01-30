import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginBg from '../assets/loginImg.png'
// import { GiAutomaticSas } from "react-icons/gi";


import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGithub } from "react-icons/fa6";



const Register = () => {
    const { signUpWithEmailAndPassword, userUpdate, googleLogin, gitHubLogin } = useContext(AuthContext);
    // const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

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

    }

    const handleSignUpWithEmailAndPassword = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log(email, password, name);

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/.test(password)) {
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

            return Toast.fire({
                icon: "error",
                title: 'Invalid password. The password must consists with at least one capital letter , one special character and 6 characters '
            })

            // toast.error('Invalid password. The password must consists with at least one capital letter , one special character and 6 characters ')

        }


        signUpWithEmailAndPassword(email, password)
            .then(res => {
                userUpdate(name, image)
                    .then(() => {
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
    
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
                            title: "Profile successfully created!"
                        });
                        navigate('/dashboard/my-task');


                        // toast.success('Profile successfully created!')


                    })
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

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result);


                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL,

                }

                console.log(userInfo);

                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         console.log(res.data);
                //         navigate('/')
                //     })
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
        <div className="pb-20 pt-[140px] md:pt-[180px] 
        lg:pt-[100px] px-4  " style={{ backgroundImage: 'url(https://i.ibb.co/FKb4799/4062949-87399.jpg)' }}>
            <div className="md:flex-row flex flex-col-reverse items-center justify-center max-w-5xl bg-transparent shadow-2xl shadow-white md:rounded-3xl mx-auto  ">
            <div className="md:w-[50%]">
                    <img src={loginBg} alt="" />
                    <div className="p-3 ">
                        <p className="text-gray-300 text-center">Uncover a realm where tasks are not just completed but conquered collaboratively. Experience the future of productivity!</p>
                    </div>
                </div>

                <div className="md:w-[50%] md:rounded-r-2xl bg-purple-200 p-4 shadow sm:p-8 ">
                    <h2 className="my-4 text-3xl text-blue-700 font-semibold text-center">Create a New Account</h2>
                    <p className="text-sm text-center text-blue-600 dark:text-gray-400">Already have an account? Please
                        <Link to='/login' className="focus:underline font-semibold text-blue-900 hover:underline"> Login here</Link>
                    </p>
                    <div className="card-body">
                        <form onSubmit={handleSignUpWithEmailAndPassword} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base text-blue-600 font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name" className="input input-bordered dark:border-gray-700  focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 border-blue-800 dark:bg-gray-900 dark:text-gray-100 
                        focus:dark:border-violet-400" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base text-blue-600 font-bold">Img URL</span>
                                </label>
                                <input type="text" placeholder="Image URL" name="image" className="input input-bordered dark:border-gray-700  focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 border-blue-800 dark:bg-gray-900 dark:text-gray-100 
                        focus:dark:border-violet-400" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base text-blue-600 font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="email" className="input input-bordered dark:border-gray-700  focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 border-blue-800 dark:bg-gray-900 dark:text-gray-100 
                        focus:dark:border-violet-400" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base text-blue-600 font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" name="password" className="input input-bordered dark:border-gray-700  focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 border-blue-800 dark:bg-gray-900 dark:text-gray-100 
                        focus:dark:border-violet-400" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white">Register</button>
                            </div>

                        </form>

                        <div className="flex items-center w-full my-4">
                            <hr className="w-full border-blue-800  dark:text-gray-400" />
                            <p className="px-3 dark:text-gray-400">OR</p>
                            <hr className="w-full border-blue-800 dark:text-gray-400" />
                        </div>

                        <div className="flex items-center w-full">
                            <hr className="w-full border-blue-700  dark:text-gray-400" />
                            <p className="flex-shrink-0 px-2 text-blue-800 font-semibold dark:text-gray-400">Login with</p>
                            <hr className="w-full border-blue-700 dark:text-gray-400" />
                        </div>
                        <div className=" flex items-center justify-center w-full p-4 space-x-4 -mt-5  border-blue-700 border-l border-r border-b  focus:ri focus:ri dark:border-gray-400 focus:ri">
                            <button onClick={handleGoogleLogin} type="button" className=" ">
                                <FcGoogle className="text-3xl "></FcGoogle>

                            </button>
                            <button onClick={handleGitHubLogin} type="button" className=" ">
                                <FaGithub className="text-3xl " />

                            </button>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;