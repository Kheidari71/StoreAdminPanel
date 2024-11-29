import httpService from "./httpService";

export const getShippingMethodService = ()=>{
    return httpService("/admin/deliveries")
}
export const addShippingMethodService = (data)=>{
    return httpService("/admin/deliveries" , "post" , data)
}




