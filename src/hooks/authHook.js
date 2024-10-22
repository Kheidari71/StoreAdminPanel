// export const useAuthStatus = ()=>{
//     const [loading, setLoading] = useState(true)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const dispatch = useAppDispatch()

import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

//     // const {handleStoreUserInfo} = usePermissions()


//     const handleCheckAuth = async ()=>{
//         const token = localStorage.getItem(GLOBAL_CONST.login_token_name)
//         setLoading(true)
//         if (token) {            
//             const res = await authService(token)            
//             if(res.status === 200) {
//                 setIsLoggedIn(true)
//                 const userInfo = res.data.data as CurrentUserInfoType
//                 dispatch(getUserInfo(userInfo))
//                 // handleStoreUserInfo(userInfo)
//             }
//             else {
//                 if (res.status) {
//                     setIsLoggedIn(false)
//                     localStorage.removeItem(GLOBAL_CONST.login_token_name)
//                 }
//             }                
//         }else{
//             setIsLoggedIn(false)
//         }
//         setLoading(false)        
//     }

//     useEffect(()=>{        
//         handleCheckAuth()
//     },[])

//     return {loading, isLoggedIn}
// }
export const useAuthStatus = () => {
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkLoggedIn = async () => {
        
        const token =localStorage.getItem("loginToken")//!!! // این 
        
       

        //token exist or not
        if (token) {
            try {
                const res = await axios.get("https://ecomadminapi.azhadev.ir/api/auth/user", {
                    headers: {
                        Authorization: `Bearer ${token}` // 👍 thanks!
                    },

                });
             
                
                if (res.status === 200) {
               
                    //if response 200 = isloggedin true . 
                    setIsLoggedin(true)

                } else {
                    //if response is not 200 locall storage should be deleted.
                    //if response is not 200 isloggedin false . 
                    console.log("Invalid response status:", res.status);
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

    return { isLoggedIn, isLoading }

}