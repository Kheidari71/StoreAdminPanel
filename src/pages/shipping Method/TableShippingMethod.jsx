import React, { useEffect, useState } from 'react';
import { getShippingMethodService } from '../../services/auth';
import LoadingSpinner from '../../components/LoadingSpinner';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const TableShippingMethod = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetShippingMethod = async () => {
        setLoading(true)
        const res = await getShippingMethodService()
        if (res.status == 200) {
            setData(res.data.data);
            console.log(res.data.data)
            setLoading(false)
        } else {
            console.log("hello")
            setLoading(false)
        }
    }

    useEffect(() => {
        handleGetShippingMethod()
    }, []);

    const tableHeadInfo = [
        { key: "id", title: "#" },
        { key: "title", title: "Title" },
        { key: "fee", title: "Shipping Fee" },
        { key: "actions", title: "Actions" },
    ]

    return (
        <div className="flex m-auto w-full md:w-5/6 overflow-x-auto">
        {loading ? (
            <LoadingSpinner />
        ) : data.length ? (
            <table className="text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
                <thead  className="font-inter">
                    <tr className='bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter' >
                        {tableHeadInfo.map((col) => (
                            <th
                                key={col.key}
                                className='text-center p-4'
                            >
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='font-inter'>
                    {data.map((shipping, index) => (
                        <tr key={shipping.id} className="border-b">
                            <td className="p-">{index + 1}</td>
                            <td className="p-3">{shipping.title}</td>
                            <td className="p-3">{shipping.amount}</td>
                            <td className="p-3 text-center">
                                <div className="flex justify-center space-x-4">
                                    <FaEdit className="text-yellow-500 cursor-pointer hover:text-yellow-600" />
                                    <FaTrashAlt className="text-red-500 cursor-pointer hover:text-red-600" />
                                </div>
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

export default TableShippingMethod;
