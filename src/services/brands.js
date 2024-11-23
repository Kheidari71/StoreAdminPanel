import httpService from "./httpService";



// "https://ecomadminapi.azhadev.ir/api/admin/brands"
export const getBrandService = ()=>{
    return httpService("/admin/brands")
}
