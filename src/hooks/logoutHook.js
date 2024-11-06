import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "../components/Alert";
import httpService from "../services/httpService";
import { logOutService } from "../services/auth";

export const useAuthLogOut = () => {

    const [loading , setLoading]= useState(true)
    const handleLogOut = async () => {
        try {
 
            const res = await logOutService();
          
            
            if (res.status === 200) {
                localStorage.removeItem('loginToken');
                setLoading(false);
            } else {
                alert("Sorry..! Something went wrong", res.data.message, "error");
            }
            setLoading(false);
        } catch (error) {
            console.log("Logout error:", error);
            setLoading(false);
            Alert("Sorry, there is an error from the server!", "error");
        }
    }
    useEffect(() => {
        handleLogOut()
    }, []);

    return {loading , setLoading}

}