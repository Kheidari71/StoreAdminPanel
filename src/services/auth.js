import httpService from "./httpService";

export const logOutService = ()=>{
    return httpService("/auth/logout", 'get');
}

export const logInService = ()=>{
    return httpService("/auth/user", 'get' );
}

export const logInUserService = (loginData)=>{
    return httpService("/auth/login", 'post' ,loginData);
}
// "https://ecomadminapi.azhadev.ir/api/admin/categories"


