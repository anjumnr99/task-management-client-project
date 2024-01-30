import axios from "axios";



const axiosPublic = axios.create({
    baseURL: "https://task-management-server-joc6mzi45-anjus-projects-6a90d7b7.vercel.app",
    

})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;