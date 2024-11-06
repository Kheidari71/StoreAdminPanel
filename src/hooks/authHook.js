// export const useAuthStatus = ()=>{
//     const [loading, setLoading] = useState(true)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const dispatch = useAppDispatch()

import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { useUserInfoStore } from "../zustand/userInfoStore";
import { logInService } from "../services/auth";


export const useAuthStatus = () => {

    const { userInfo, setUserInfo } = useUserInfoStore((state) => state);

    const [isLoggedIn, setIsLoggedin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkLoggedIn = async () => {

        const token = localStorage.getItem("loginToken")
        //token exist or not
        if (token) {
            try {
                const res = await logInService();
            
                if (res.status === 200) {
                        
                    //if response 200 = isloggedin true . 
                  
                  const userName = res.data.user_name || "Kiana Heidari";
                 
                  setUserInfo({...res.data ,  user_name: userName})
                    setIsLoggedin(true)
                    
                    // setUserInfo(user)
                
                } else {
                    //if response is not 200 locall storage should be deleted.
                    //if response is not 200 isloggedin false . 
                    
                    // localStorage.removeItem("loginToken");
                    setIsLoggedin(false)
                }
            } catch (error) {
                //token not exist islogedin false
                console.error("Error checking auth status:", error);
                // localStorage.removeItem("loginToken");
                setIsLoggedin(false);
            }

        } else {

            setIsLoggedin(false);
        }
        //loading false mishe. 
        setIsLoading(false);

    }

    useEffect(() => {
        checkLoggedIn()
    }, []);

    return { isLoggedIn, isLoading , userInfo}

}