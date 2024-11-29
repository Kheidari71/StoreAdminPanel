import React from "react";

const FileInput = ({ label, register, name, className, placeholder }) => (
  <div className="mb-4">
    <label className="dark:bg-transparent dark:text-gray-300 block text-sm text-card&table mb-2">{label}</label>
    <input
      type="file"
      {...register(name)}
      className={`w-full p-2 border border-gray-300 rounded-lg ${className}`}
    />
  
    <span className={`text-gray-500 ${className}`}>
      {placeholder || "No file chosen"}
    </span>
  </div>
);

export default FileInput;
