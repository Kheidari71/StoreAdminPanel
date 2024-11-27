import React from 'react';

const Checkbox = ({label , register , name , }) => {
    return (
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register(name)}
            className="mr-2"
          />
            <label className="text-sm text-card&table dark:text-gray-200">
             {label}
            </label>
          </div>
    );
}

export default Checkbox;
