import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import Actions from '../guaranties/Actions';
import apiClient from '../../services/apiService';

const TableShippingMethod = ({forceRender}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetShippingMethod = async () => {
        setLoading(true)
        const res = await apiClient.get("/admin/deliveries")
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
    }, [forceRender]);

    const tableHeadInfo = [
        { key: "id", title: "#" },
        { key: "title", title: "Title" },
        { key: "fee", title: "Shipping Fee" },
        { key: "delivery time", title: "Delivery time" },
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
                            <td className="flex justify-center items-center p-3">
                            <div
                                        className=" h-5 rounded text-center p-4'"
                                    
                                    >{shipping.time_unit}</div>
                                    <div
                                        className=" h-5 rounded text-center p-4'"
                                    
                                    >{shipping.time}</div>
                              </td>
                            <div
                                        className="w-5 h-5 rounded text-center p-4'"
                                    
                                    ></div>
                            <td className="p-3 text-center">
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

export default TableShippingMethod;
