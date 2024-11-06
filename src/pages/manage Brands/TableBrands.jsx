
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';

import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import { getBrandService } from '../../services/auth';

const TableBrands = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

const handleGetBrands = async()=>{
    setLoading(true)
  
    try {
        const res= await getBrandService()
        if (res.status === 200){
            setData(res.data.data);
        
        }
    } catch (error) {
console.log(error)
    }finally{
        setLoading(false)
    }

}

useEffect(() => {
    handleGetBrands()
}, []);

const tableHeadInfo = [
    {key: "id" , lable :"#"},
    {key: "title" , lable :"Title"},
    {key: "TimeCreated" , lable :"Creation Time"},
    {key: "descriptions" , lable :"descriptions"},
    {key: "actions" , lable :"Actions"}
]

    return (
        <div className='flex m-auto w-5/6 overflow-x-auto'>
            {loading ? (
<LoadingSpinner/>
            ):  data.length ? (
<table className="text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
    <thead  className="font-inter">
        <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter ">
{tableHeadInfo.map((col)=>(
<th className='text-center p-4' key={col.key}>{col.lable}</th>
))}
        </tr>
    </thead>
<tbody className="font-inter">
{data.map((brand , index)=>(
<tr className="border-b font-inter" key={brand.id}> 
    <td className='p-3'>{index + 1} </td>
    <td className='p-3'>{brand.
original_name} </td>
    <td className='p-3'> {brand.created_at}</td>
    <td className='p-3'> {brand.descriptions || "No description available"}</td>
    <td className="p-3 py-3 sm:px-4 text-center">
    <div className="flex justify-center space-x-4">
                    <FaShareAlt className="text-green-500 cursor-pointer" />
                    <FaEdit className="text-yellow-500 cursor-pointer" />
                    <FaPlus className="text-pink-500 cursor-pointer" />
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
                  </div>
                </td>
</tr>
))}
</tbody>
</table>
            ):(
                <h5 className="text-center my-5 text-danger">No record has found</h5>
            )}
   </div>     
    );

}

export default TableBrands;
