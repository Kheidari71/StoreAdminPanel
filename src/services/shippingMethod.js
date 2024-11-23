import httpService from "./httpService";

export const getShippingMethodService = ()=>{
    return httpService("/admin/deliveries")
}




