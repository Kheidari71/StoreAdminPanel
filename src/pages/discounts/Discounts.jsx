import React from 'react';
import { FaSearch, FaShareAlt, FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa'; // Icons for actions
import { AiOutlinePlus } from 'react-icons/ai'; // Plus icon for adding products
import TableDiscount from './TableDiscount'

const Discount = () => {
  // Table data
 

  return (
    <div className="w-full p-8 font-inter">
      {/* Title & Search Bar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl dark:text-gray-100 font-semibold">Manage Discounts</h1>

        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              className="dark:bg-transparent hidden sm:block border border-gray-300 h-10 w-72 pl-10 pr-4 rounded-md text-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Please enter a part of the product..."
            />
            <FaSearch className="absolute dark:text-gray-200 sm:left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Plus Icon for Adding New Product */}
          <AiOutlinePlus className="text-icon_pink w-8 h-8 cursor-pointer" />
        </div>
      </div>

      {/* discount Table */}
      <TableDiscount/>
     
    </div>
  );
}

    export default Discount;
