import React, { useEffect } from 'react';
import { FaSearch, FaShareAlt, FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa'; // Icons for actions
import {useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; // Plus icon for adding products
import TableManageProductGroup from './TableManageProductGroup';
import Modalcontainer from './ModallContainer';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useDataStore } from '../../zustand/dataStateStore';


const ManageProductsGroup = () => {
  const [forceRender, setForceRender] = useState(0);

  const params = useParams(); 
  const parentId = params.parentId;
  
  // Table data
 const [isModalOpen , setIsModalOpen]= useState(false);
const handleModalOpen = ()=>{
  setIsModalOpen(true)
}

const handleModalClose = ()=>{
  setIsModalOpen(false)
}

  return (
    <div className="w-full p-8 font-inter">
      {/* Title & Search Bar */}
      <div className="flex justify-between items-center mb-8">
        {/* <h1 className="text-2xl dark:text-gray-100 font-semibold">{data[0].title}</h1> */}
    
        {/* <h1 className="text-2xl dark:text-gray-100 font-semibold">{!parentId ? "Manage Product Grouop" : location.state.data.title}</h1> */}
        <h1 className="text-2xl dark:text-gray-100 font-semibold">Manage product group</h1>
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
          <AiOutlinePlus  onClick={handleModalOpen} className="text-icon_pink w-8 h-8 cursor-pointer" />
          <Modalcontainer setForceRender={setForceRender}  forceRender={forceRender} parentId={parentId} handleModalClose={handleModalClose} isModalOpen={isModalOpen} handleModalOpen={handleModalOpen} />
        </div>
      </div>

      {/* Product Table */}
      <TableManageProductGroup params= {params} parentId={parentId} forceRender={forceRender} setForceRender={setForceRender}/>

      <Outlet/>
     
    </div>
  );
}

export default ManageProductsGroup;
