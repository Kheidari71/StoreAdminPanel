import httpService from "./httpService";


// "https://ecomadminapi.azhadev.ir/api/admin/colors"
export const getColorsService = ()=>{
    return httpService("/admin/colors")
}

export const addColorsService = (data)=>{
    return httpService("/admin/colors" , "post" , data)
}
