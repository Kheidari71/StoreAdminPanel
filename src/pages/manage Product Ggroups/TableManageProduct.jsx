import React from 'react';
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';

const TableManageProduct = () => {
    const tableData = [
        { id: 1, title: "Frying Pan", status: "Low Stock (3)" },
        { id: 2, title: "Kettle", status: "In Stock" },
        { id: 3, title: "Spoon", status: "In Stock" },
        { id: 4, title: "Fork", status: "Low Stock (1)" },
        { id: 5, title: "Plate", status: "In Stock" }
      ];

    return (
        <div>
             <table className="dark:bg-transparent dark:text-gray-100 min-w-full bg-white shadow-md rounded-lg">
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
      </table>
        </div>
    );
}

export default TableManageProduct;
