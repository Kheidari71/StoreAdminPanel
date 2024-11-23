import httpService from "./httpService";

export const logOutService = ()=>{
    return httpService("/auth/logout", 'get');
}




