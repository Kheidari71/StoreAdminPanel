import React from 'react';
import { FaSearch, FaShareAlt, FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa'; // Icons for actions
import { AiOutlinePlus } from 'react-icons/ai'; // Plus icon for adding products

const ManageProducts = () => {
  // Table data
  const tableData = [
    { id: 1, title: "Frying Pan", status: "Low Stock (3)" },
    { id: 2, title: "Kettle", status: "In Stock" },
    { id: 3, title: "Spoon", status: "In Stock" },
    { id: 4, title: "Fork", status: "Low Stock (1)" },
    { id: 5, title: "Plate", status: "In Stock" }
  ];

  return (
    <div className="w-full p-8">
      {/* Title & Search Bar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl dark:text-gray-100 font-semibold">Manage Product</h1>

        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 h-10 pl-10 pr-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Please enter a part of the product..."
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Plus Icon for Adding New Product */}
          <AiOutlinePlus className="text-icon_pink w-8 h-8 cursor-pointer" />
        </div>
      </div>

      {/* Product Table */}
      <table className="dark:bg-transparent dark:text-gray-100 min-w-full bg-white shadow-md rounded-lg dark-bg-gray">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-400 text-left text-sm font-semibold">
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4">Product Title</th>
            <th className="py-3 px-4">Status (وضعیت)</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-3 px-4">{product.id}</td>
              <td className="py-3 px-4">{product.title}</td>
              <td className="py-3 px-4">{product.status}</td>
              <td className="py-3 px-4 text-center">
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

export default ManageProducts;
