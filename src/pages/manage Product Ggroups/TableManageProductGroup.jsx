import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Alert } from '../../components/Alert';

const TableManageProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetCategories = async () => {
    setLoading(true); // Start loading
    try {
      const token = localStorage.getItem("loginToken");
      const res = await axios.get("https://ecomadminapi.azhadev.ir/api/admin/categories", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 200) {
        setData(res.data.data); // Set the fetched data to state
        console.log(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const tabaleHeadInfo = [
    { key: 'id', label: '#' },
    { key: 'title', label: 'Title' },
    { key: 'descriptions', label: 'Descriptions' },
    { key: 'actions', label: 'Actions' }
  ];

  return (
    <div>
      {/* <table className="border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
        <thead className='font-inter '>
          <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter">
            <th className="py-3 sm:px-4">#</th>
            <th className="py-3 sm:px-4">Product Title</th>
            <th className="py-3 sm:px-4">Status</th>
            <th className="py-3 sm:px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className='font-inter'>
          {tableData.map((product) => (
            <tr key={product.id} className="border-b font-inter">
              <td className="py-3 sm:px-4">{product.id}</td>
              <td className="py-3 sm:px-4">{product.title}</td>
              <td className="py-3 sm:px-4">{product.status}</td>
              <td className="py-3 sm:px-4 text-center">
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
      </table> */}
      {loading? (
        <LoadingSpinner/>
      ): data.length ? (
        <table className="border-solid dark:bg-transparent dark:text-gray-100 w-full bg-white shadow-md rounded-lg">
<thead className="font-inter">
<tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-inter ">
{tabaleHeadInfo.map((col)=>(
<th className='text-center p-4' key={col.key}>{col.label}</th>
))}
</tr>
</thead>
<tbody className="font-inter">
  {data.map((product , index)=>(
<tr key={product.id} className="border-b font-inter">
  <td className='p-3'>{index + 1}</td>
  <td className='p-3'>{product.title}</td>
  <td className='p-3'>{product.descriptions || "No description available"}</td>
  
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
      ): (
         <h5 className="text-center my-5 text-danger">No record has found</h5>
      )}
    </div>
  );
}

export default TableManageProduct;
