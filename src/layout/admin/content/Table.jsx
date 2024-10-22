import React from 'react';
import { FaEye } from "react-icons/fa";

const Table = ({data}) => {
    return (
        <div className=" flex justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
        <table className="w-full dark:bg-gray-400 table-auto bg-white  border-spacing-y-2 rounded-xl ">
          {/* Table Head */}
          <thead>
            <tr className="text-md font-thin text-card&table dark:text-gray-200">
              <th className="px-1 py-4 font-thin">#</th>
              <th className="px-1 py-4 font-thin">Category</th>
              <th className="px-1 py-4 font-thin">Title</th>
              <th className="px-1 py-4 font-thin">Status</th>
              <th className="px-1 py-4 font-thin">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="font-inter text-sm dark:text-gray-100">
            {data.map((row) => (
              <tr key={row.id} className="  border-bg_icon_blue">
                <td className="px-1 sm:px-6 py-4 text-center">{row.id}</td>
                <td className="px-1 sm:px-6 py-4 text-center">{row.category}</td>
                <td className="px-1 sm:px-6 py-4 text-center">{row.title}</td>
                <td className="px-1 sm:px-6 py-4 text-center">{row.status}</td>
                <td className="px-1 sm:px-6 py-4 text-center">
                  {/* Eye Icon */}
                  <FaEye className="text-gray-300 hover:text-icon_pink m-auto" size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Table;
