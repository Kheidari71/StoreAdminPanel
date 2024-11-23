import httpService from "./httpService";

export const getRolesService = ()=>{
    return httpService("/admin/roles")
}





