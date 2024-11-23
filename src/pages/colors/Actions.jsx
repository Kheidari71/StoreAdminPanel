import React from 'react';
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';


const Actions = () => {
    return (
        <div className="flex justify-center space-x-4">
            <FaShareAlt className="text-green-500 cursor-pointer" />
            <FaEdit className="text-yellow-500 cursor-pointer" />
            <FaPlus className="text-pink-500 cursor-pointer" />
            <FaTrashAlt className="text-red-500 cursor-pointer" />
        </div>
    );
}

export default Actions;