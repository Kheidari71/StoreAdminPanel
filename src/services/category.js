import httpService from "./httpService";


// "https://ecomadminapi.azhadev.ir/api/admin/categories"
export const getCategoryService = ()=>{
    return httpService("/admin/categories" , "get")
}
export const getCategoryChildService = (parentId)=>{
    return httpService(`/admin/categories?parent=${parentId}`)
}

export const addCategoryService = (data) => {
    if(data.image){
        const formdata = new FormData();
        formdata.append('parent_id', data.parent_id || '');
        formdata.append('title', data.title);
        formdata.append('description', data.description);
        formdata.append('image', data.image);
        formdata.append('is_active', data.is_active ? 1 : 0);
        formdata.append('show_in_menu', data.show_in_menu ? 1 : 0);
        return httpService("/admin/categories", 'post', formdata);
    }
    return httpService("/admin/categories", 'post', data);
}


