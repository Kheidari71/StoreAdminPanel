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
export const getCategoryService = ()=>{
    return httpService("/admin/categories")
}
export const getCategoryChildService = (parentId)=>{
    return httpService(`/admin/categories?parent=${parentId}`)
}

// "https://ecomadminapi.azhadev.ir/api/admin/brands"
export const getBrandService = ()=>{
    return httpService("/admin/brands")
}
// "https://ecomadminapi.azhadev.ir/api/admin/colors"
export const getColorsService = ()=>{
    return httpService("/admin/colors")
}
// "https://ecomadminapi.azhadev.ir/api/admin/guarantees"
export const getGuarantiesServis = ()=>{
    return httpService("/admin/guarantees")
}

export const getDiscountService = ()=>{
    return httpService("/admin/discounts")
}

export const getPermissionsService = ()=>{
    return httpService("/admin/permissions")
}

export const getRolesService = ()=>{
    return httpService("/admin/roles")
}

export const getShippingMethodService = ()=>{
    return httpService("/admin/deliveries")
}




