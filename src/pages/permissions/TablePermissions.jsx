import React, { useDebugValue, useEffect, useState } from 'react';
import { getPermissionsService } from '../../services/auth';
import LoadingSpinner from '../../components/LoadingSpinner';

const TablePermissions = () => {
const [loading , setLoading]= useState(false);
const [data , setData] = useState([]);
const handleGetPermissions = async()=>{
    setLoading(true)
    try {
        const res = await getPermissionsService();
        if(res.status == 200){
            console.log(res);
            setData(res.data.data)
        }
    } catch (error) {
        console.log(error)
    }finally{
setLoading(false)
    }
}

useEffect(() => {
    
    handleGetPermissions()
}, []);


// category
// : 
// "دسته بندی ها"
// description
// : 
// "مشاهده دسته بندی ها"
// id
// : 
// 1
// title
// : 
// "read_categories"

const tableHeadInfo = [
    {key : "id" , title :"#"},
    {key : "title" , title :"Title"},
    {key : "category" , title :"categories"},
    {key : "descriptions" , title :"Descriptions"}
]


    return (
        <div className="flex m-auto w-full md:w-5/6 overflow-x-auto ">
        {loading ? (
            <LoadingSpinner />
        ) : data.length ? (
            <table className="text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
                <thead className="font-inter">
                    <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter ">
                        {tableHeadInfo.map((col) => (
                            <th  key={col.key} className='text-center p-4'>
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="font-inter">
                    {data.map((permission, index) => (
                        <tr key={permission.id} className="border-b dark:border-gray-600">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{permission.category}</td>
                            <td className="p-3">{permission.title}</td>
                            <td className="p-3">{permission.description || "No descriptions available"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <h5 className="text-center my-5 text-red-500">No records found</h5>
        )}
    </div>
    );
}

export default TablePermissions;
