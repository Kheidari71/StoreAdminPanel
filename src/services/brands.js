import httpService from "./httpService";



// "https://ecomadminapi.azhadev.ir/api/admin/brands"
export const getBrandService = ()=>{
    return httpService("/admin/brands")
}

export const addBrandService = (data)=>{

    if(data.logo){
        const formdata = new FormData();
        formdata.append('original_name', data.original_name );
        formdata.append('persian_name', data.persian_name || '');
        formdata.append('description', data.description);
        formdata.append('logo', data.logo);
        return httpService("/admin/brands", 'post', formdata);
    }
    return httpService("/admin/brands" , 'post' , data)
}

