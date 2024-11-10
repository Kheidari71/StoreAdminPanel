
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import LoadingSpinner from '../../components/LoadingSpinner';

import { getColorsService } from '../../services/auth';
import Actions from './Actions';

const TableManageColors = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetColors = async () => {
        setLoading(true)
        try {

            const token = localStorage.getItem("loginToken")
            const res = await getColorsService();
            if (res.status === 200) {
              
                setData(res.data.data)
            }
        } catch (error) {
        
            setLoading(false);
        } finally {
            setLoading(false); // Stop loading
        }

    }

    useEffect(() => {
        handleGetColors()
    }, []);

    const tableHead = [
        {
            key: "id", lable: "#"
        },
        {
            key: "title", lable: "Color Name"
        },
        {
            key: "code", lable: "Color Code"
        },
        {
            key: "color", lable: "Color"
        },
        {key :"actions" , lable:"Actions"}
    ]

    return (
        <div className=' flex m-auto w-5/6'>
            {loading ? (<LoadingSpinner />)
                : data.length ? (
                    <table className=" text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
                        <thead className='text-center'>
                            <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter ">
                                {tableHead.map((col) => (
                                    <th className='text-center p-4' key={col.key}>{col.lable}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((color , index)=>(
<tr className="border-b font-inter" key={color.id}>
    <td className='text-center p-4'>{index + 1}</td>
    <td className='text-center p-4'>{color.title}</td>
    <td className='text-center p-4'>{color.code}</td>
    <td className='text-center p-4 flex justify-center'><div 
      className="w-11 h-4 rounded text-center p-4'" 
      style={{ backgroundColor: color.code }}
    ></div></td>
      <td className="p-3 py-3 sm:px-4 text-center">
                 <Actions/>
                </td>
</tr>
                           ))}
                        </tbody>
                    </table>
                ) : (
                    <h5 className="text-center my-5 text-danger">No record has found</h5>
                )}
        </div>
    )
}
export default TableManageColors;
