import React from 'react';
import { useThemeStore } from '../zustand/themeStore';



const LoadingSpinner = () => {

  const {theme, setTheme} = useThemeStore((state) => state);
  const spinnerColor = theme === "dark" ? "border-gray-700" : "border-gray-700";

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center  ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div
          className={`w-16 h-16 border-4 ${spinnerColor} border-t-indigo-500 rounded-full animate-spin`}
        ></div>
        <p className={`text-lg font-medium ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
