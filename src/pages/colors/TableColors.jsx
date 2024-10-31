import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Alert } from '../../components/Alert';
import { GiToken } from 'react-icons/gi';

const TableManageColors = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetColors = async () => {
        setLoading(true)
        try {

            const token = localStorage.getItem("loginToken")
            const res = await axios.get("https://ecomadminapi.azhadev.ir/api/admin/colors", {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })
            if (res.status === 200) {
                console.log(res.data.data)
                setData(res.data.data)
            }
        } catch (error) {
            console.log(error)
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
        }
    ]

    return (
        <div>
            {loading ? (<LoadingSpinner />)
                : data.length ? (
                    <table className="border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
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
      className="w-11 h-3 rounded text-center p-4'" 
      style={{ backgroundColor: color.code }}
    ></div></td>
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
