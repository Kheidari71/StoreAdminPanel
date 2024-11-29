
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';

import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import { getBrandService } from '../../services/brands';
import Actions from './Actions';

const TableBrands = ({forceRender}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const handleGetBrands = async () => {

            const res = await getBrandService()
            res && setLoading(false)
            if (res.status === 200) {
                setData(res.data.data);

            }
         
    }

    useEffect(() => {
        handleGetBrands()
    }, [forceRender]);

    const tableHeadInfo = [
        { key: "id", lable: "#" },
        { key: "title", lable: "Title" },
        { key: "persian name", lable: "Persian Name" },
        { key: "descriptions", lable: "descriptions" },
        { key: "image", lable: "Logo" },
        { key: "actions", lable: "Actions" }
    ]

    return (
        <div className='flex m-auto w-5/6 overflow-x-auto'>
            {loading ? (
                <LoadingSpinner />
            ) : data.length ? (
                <table className="text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
                    <thead className="font-inter">
                        <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter ">
                            {tableHeadInfo.map((col) => (
                                <th className='text-center p-4' key={col.key}>{col.lable}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-inter">
                        {data.map((brand, index) => (
                            <tr className="border-b font-inter" key={brand.id}>
                                <td className='p-3'>{index + 1} </td>
                                <td className='p-3'>{brand.original_name} </td>
                                <td className='p-3'> {brand.persian_name}</td>
                            
                                <td className='p-3'> {brand.descriptions || "No description available"}</td>
                                <td className='text-center p-3 flex justify-center'><div
                                    className="flex justify-center items-center w-11 h-11 rounded text-center p-4'"

                                >{brand.logo ? <img src={"https://ecomadminapi.azhadev.ir/api/"+brand.logo}/> : null}</div></td>
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

export default TableBrands;
