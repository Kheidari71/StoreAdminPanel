import httpService from "./httpService";


// "https://ecomadminapi.azhadev.ir/api/admin/colors"
export const getColorsService = ()=>{
    return httpService("/admin/colors")
}