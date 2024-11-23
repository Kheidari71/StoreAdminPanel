import httpService from "./httpService";


export const getDiscountService = ()=>{
    return httpService("/admin/discounts")
}





