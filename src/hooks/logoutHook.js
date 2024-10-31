// export const useAuthStatus = ()=>{
//     const [loading, setLoading] = useState(true)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const dispatch = useAppDispatch()

import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "../components/Alert";

export const useAuthLogOut = () => {

    const [loading , setLoading]= useState(true)
    const handleLogOut = async ()=>{
        const token = localStorage.getItem("loginToken")
        try {
            const res = await axios.get("https://ecomadminapi.azhadev.ir/api/admin/categories", {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
              if (res.status == 200){
                const token = localStorage.getItem("loginToken")
                console.log(token)
                localStorage.removeItem('loginToken')
    
                console.log("Heloooooooo success");
    setLoading(false);
              }else{
                alert("Sorry..! Something went wrong", res.data.message, "error")
              }
    setLoading(false)
        } catch (error) {
                 console.log(error)
            setLoading(false);
            Alert("Sorry , there is an error from the server!", "error")
      
        }
    }
    useEffect(() => {
        handleLogOut()
    }, []);

    return {loading , setLoading}

}