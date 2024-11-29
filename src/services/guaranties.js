import httpService from "./httpService";


// "https://ecomadminapi.azhadev.ir/api/admin/guarantees"

export const getGuarantiesServis = (data)=>{
    return httpService("/admin/guarantees")
}

export const addGuarantiesServis = (data)=>{
    return httpService("/admin/guarantees", 'post' , data)
}

