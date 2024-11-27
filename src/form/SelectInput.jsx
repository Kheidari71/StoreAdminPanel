import React from 'react';

const SelectInput = ({label , register ,name , options}) => {
    return (
        <div className="mb-4">
        <label className="dark:bg-transparent dark:text-gray-300 block text-sm text-card&table mb-2">
          {label}
        </label>
        <select
{...register(name)}
defaultValue="active" 
         className="text-gray-300 dark:bg-transparent dark:text-gray-300 w-full p-2 border border-gray-300 rounded-lg">
         {options.map((option , index)=>(
            <option key= {index} value={option.value}>{option.label}</option>
         ))}
          
          {/* Add other status options here */}
        </select>
      </div>
    );
}

export default SelectInput;
