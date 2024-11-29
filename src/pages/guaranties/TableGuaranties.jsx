
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import { getGuarantiesServis } from '../../services/guaranties';
import Actions from './Actions';

const TableGuaranties = ({forceRender
}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const handleGetGuaranties = async () => {
        setLoading(true);
        try {
           
            const res = await getGuarantiesServis()
            if (res.status === 200) {
                setData(res.data.data); // Save data to state
         
            }
        } catch (error) {
  
        }
        setLoading(false);
    };

    useEffect(() => {
        handleGetGuaranties();
    }, [forceRender]);

    const tableHeadInfo = [
        { key: "id", label: "#" },
        { key: "title", label: "Title" },
       
        { key: "descriptions", label: "Descriptions" },
        { key: "duration", label: "Duration" },
        { key: "unit", label: "Duration Unit" },
        { key: "actions", label: "Actions" }
    ];


    return (
        <div className='flex m-auto w-5/6 overflow-x-auto'>
            {loading ? (
                <LoadingSpinner />
            ) : (
                data.length > 0 ? (
                    <table className="text-center border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
                        <thead className="font-inter">
                            <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter ">
                                {tableHeadInfo.map((col) => (
                                    <th className='text-center p-4' key={col.key}> {col.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="font-inter">
                            {data.map((guarante, index) => (
                                <tr key={guarante.id} className="border-b font-inter">
                                    <td className='p-3'>{index + 1}</td>
                                    <td className='p-3'>{guarante.title}</td>
                                    
                                    <td className='p-3'>{guarante.descriptions || "No description available"}</td>
                                    <td className='p-3'>{guarante.length}</td>
                                    <td className='p-3'>{guarante.length_unit}</td>
                                    <td className="p-3 py-3 sm:px-4 text-center">
                 <Actions/>
                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h5 className="text-center my-5 text-danger">No record has found</h5>
                )
            )}
        </div>
    );
};

export default TableGuaranties;
