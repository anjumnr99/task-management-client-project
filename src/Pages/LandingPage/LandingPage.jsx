import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-image .png'

const LandingPage = () => {
    return (
        <div className=' relative '>
            <img src={bannerImg} className='w-full block min-h-screen md:max-h-screen object-cover' alt="" />
            <div className=' absolute bottom-12 md:bottom-8 lg:bottom-16 space-y-2 lg:space-y-3 left-6 max-w-56 md:max-w-md lg:max-w-2xl '>
                <h1 className='  text-2xl md:text-3xl lg:text-6xl font-semibold'>Revolutionize Your <br /> Workflow with <br /> <span className=' text-purple-800 '>Task Mate!</span></h1>
                <p className=' font-semibold md:text-lg lg:text-xl'>Imagine a world where tasks are seamlessly managed, collaboration is effortless, and productivity soars.</p>

                <Link to='/dashboard/my-task'>
                    <button className='btn mt-2 btn-outline hover:bg-purple-500 hover:border-purple-600 border-2 border-purple-600 md:text-base lg:text-xl '>Let's Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;