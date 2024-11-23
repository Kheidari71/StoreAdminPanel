//using this in shipping method
import axios from "axios";
import { toast } from "react-toastify";

// Create an axios instance
const apiClient = axios.create({
 baseURL :'https://ecomadminapi.azhadev.ir/api',
 headears:{
    'Content-Type' : 'application/json',
 },
});
//Request Interceptor
apiClient.interceptors.request.use(
    (config)=>{
        const token= localStorage.getItem("loginToken");
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request Interceptor:' , config);
        return config;
    },
    (error)=>{
        console.error('Request error:' , error);
        return Promise.reject(error)
    }
);

//Response Interseptors
apiClient.interceptors.response.use(
    (response)=>{
    // Any custom processing on successful responses  
    console.log("Response Interseptor :" , response)   ;
    return response
    },
    (error)=>{
        if(error.response && error.response.status === 401){
            toast.error('Unauthorized! Redirecting to login.')
            // Redirect to login, clear tokens, etc.
        }else if(error.response && error.response.status === 500){
            toast.error("Internall error. Please try again later")
        }
        return Promise.reject(error)
    }
)
export default apiClient;
