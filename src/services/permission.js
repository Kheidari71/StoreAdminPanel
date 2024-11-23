import httpService from "./httpService";



export const getPermissionsService = ()=>{
    return httpService("/admin/permissions")
}






