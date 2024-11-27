import React from 'react';

const TextInput = ({label , name , register , errors, placeholder , validation}) => {
    return (
        <div className='mb-4'>
            <label className="dark:bg-transparent dark:text-gray-300 block text-sm text-card&table  mb-2">
              {label}
            </label>
           
             <input
            type="text"
            {...register(name , validation)}
            className="dark:bg-transparent dark:text-gray-300 w-full p-2 border border-gray-300 rounded-lg"
            placeholder={placeholder}
          />
           {errors[name] && (
            <span className="text-red-500 text-sm">{errors[name].message}</span>
          )}
        </div>
    );
}

export default TextInput;
