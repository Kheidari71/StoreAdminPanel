import React from 'react';
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Actions = ({data , parentId}) => {
    return (
        <div className="flex justify-center space-x-4">
            <Link to={`/manageProductGroups/${data.id}`} state={{data}}>
                {!parentId ?  <FaShareAlt className="text-green-500 cursor-pointer" /> : ""}
            </Link>
            <FaEdit className="text-yellow-500 cursor-pointer" />
            <FaPlus className="text-pink-500 cursor-pointer" />
          <FaTrashAlt className="text-red-500 cursor-pointer" />
        </div>
    );
}

export default Actions;
