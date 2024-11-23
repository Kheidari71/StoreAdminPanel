import React, { useEffect, useState } from 'react';
import { getRolesService } from '../../services/roles';
import LoadingSpinner from '../../components/LoadingSpinner';
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import { MdAccessibility } from 'react-icons/md';
import Actions from './Actions';

const RolesTable = () => {
    const [loading , setLoading]= useState(false);
    const [data , setData]= useState([]);

const handleGetRoles = async()=>{
    setLoading(true);
    try {
        const res = await getRolesService()
        if(res.status == 200){
            setData(res.data.data)
            console.log(res.data.data)
        }
    } catch (error) {
        console.log(error)
    }finally{
        setLoading(false)
    }
}

    useEffect(() => {
        
    handleGetRoles()
    }, []);
const tableHeadInfo= [
    {key : "id" , title :"#"},
    {key : "title" , title :"Title"},
    {key : "descriptions" , title :"Descriptions"},
    {key : "action" , title :"Actions"}  
]



    return (
        <div className="flex m-auto w-full md:w-5/6 overflow-x-auto">
        {loading ? (
            <LoadingSpinner />
        ) : data.length ? (
            <table className="text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
                <thead className="font-inter">
                    <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter ">
                        {tableHeadInfo.map((col) => (
                            <th key={col.key} className='text-center p-4'>
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='font-inter'>
                    {data.map((roles, index) => (
                        <tr key={roles.id} className="border-b font-inter">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{roles.title}</td>
                            <td className="p-3">{roles.description || "No description available"}</td>
                            <td className="p-4 text-center">
                               <Actions/>
                            </td>
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

export default RolesTable;
