import httpService from "./httpService";


// "https://ecomadminapi.azhadev.ir/api/admin/guarantees"
export const getGuarantiesServis = ()=>{
    return httpService("/admin/guarantees")
}

