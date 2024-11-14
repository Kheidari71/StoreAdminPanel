import React, { useEffect, useState } from 'react';
import { getDiscountService } from '../../services/auth';
import LoadingSpinner from '../../components/LoadingSpinner';
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import Actions from './Actions';

const TableDiscount = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);


    const handleGetDicounts = async () => {
        setLoading(true)
        try {
            const res = await getDiscountService();
            if (res.status == 200) {
                setData(res.data.data);
                console.log(res.data.data);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        handleGetDicounts()
    }, []);

    const tableHeadInfo = [
        { key: "id", title: "#" },
        { key: "code", title: "Code" },
        { key: "title", title: "Title" },
        { key: "Precentage", title: "Precentage" },
        { key: "expire", title: "Expire Date" },
        { key: "status", title: "Active" },
        { key: "actions", title: "Actions" }
    ]

    return (
        <div className='flex m-auto w-5/6 overflow-x-auto'>
            {loading ? (
                <LoadingSpinner />
            ) : data.length ? (
                <table className="text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
                    <thead className="font-inter">
                        <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter">
                            {tableHeadInfo.map((col) => (
                                <th className='text-center p-4' key={col.key}>{col.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-inter">
                        {data.map((discount, index) => (
                            <tr className="border-b font-inter" key={discount.id}>
                                <td className='p-3'>{index + 1}</td>
                                <td className='p-3'>{discount.code}</td>
                                <td className='p-3'>{discount.title}</td>
                                <td className='p-3'>{discount.percent}</td>
                                <td className='p-3'>{discount.expire_at}</td>
                                <td className='p-3'>{discount.is_active === 1 ? "Active" : "Not Active"}</td>
                                <td className="p-3 py-3 sm:px-4 text-center">
                                    <Actions />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h5 className="text-center my-5 text-danger">No record has found</h5>
            )}
        </div>
    );
}

export default TableDiscount;
