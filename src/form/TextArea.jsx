import React from 'react';

const TextArea = ({label ,register, name , placeholder , 
}) => {
    return (
        <div className="mb-4">
        <label className="block text-sm text-card&table dark:text-gray-200 mb-2">
          {label}
        </label>
        <textarea
        {...register (name)}
          className="dark:bg-transparent dark:text-gray-300 w-full p-2 border border-gray-300 rounded-lg"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
}

export default TextArea;
