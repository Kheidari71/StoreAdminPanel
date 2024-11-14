
import axios from "axios";
import config from "./config.json";
import { toast } from 'react-toastify';

const httpService = (url, method, data = null) => {
    const token = localStorage.getItem("loginToken");

    const headers = {
        "Content-Type": "application/json",
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return axios({
        baseURL: config.onlineApi,
        url: url,
        method,
        data,
        headers,
    }).catch((error) => {
        // Handle errors here
        if (error.response) {
            const statusCode = error.response.status;
            if (statusCode === 400) {
                console.error("Bad Request (400):", error.response.data.message);
                alert("There was an error with your request. Please check your input.");
            } else if (statusCode === 500) {
                console.error("Server Error (500):", error.response.data.message);
                toast.error("An internal server error occurred. Please try again later.");
            } else {
                console.error("Error:", error.response.data.message);
                toast.error("An error occurred. Please try again.");
            }
        } else if (error.request) {
            console.error("No response received:", error.request);
            toast.error("No response from the server. Please check your network connection.");
        } 
        throw error; // Re-throw the error for further handling in caller
    });
};

export default httpService;

