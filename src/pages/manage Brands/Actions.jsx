import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Actions = () => {
    return (
        <div className="flex justify-center space-x-4">
                    <FaEdit className="text-yellow-500 cursor-pointer" />
                
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
        </div>
    );
}

export default Actions;