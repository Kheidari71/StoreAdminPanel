import React from "react";
import { FaBell } from "react-icons/fa"; // Notification bell icon
import { AiOutlineSearch } from "react-icons/ai"; // Search icon
import DarkMode from "./DarkMode"
import { useThemeStore } from "../../../zustand/themeStore";

const Header = ({ isSidebarOpen}) => {

  const {theme, setTheme} = useThemeStore((state) => state);

  
  const toggleTheme = () => {
   setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`fixed w-full top-0 pl-16 left-0 h-16 bg-gray-100 flex font-inter items-center justify-between px-4 transition-all duration-300 ease-in-out dark:bg-gray-600 dark:text-gray-200 `}
      style={{ zIndex: 49 }}
    >
     
      <div className="flex items-center space-x-6">
        {/* DaisyUI Toggle Componentn */}
        <div className="cursor-pointer flex items-center">
          <DarkMode toggleTheme={toggleTheme} theme={theme}/>
        </div>
      </div>

      {/* Right Section: Search, Notifications, Avatar */}
      <div className="flex items-center md:space-x-6 sm:space-x-1">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="bg-transparent border bg-gray-200 dark:border-gray-200 hidden sm:block h-10 w-64 pr-8 pl-10 rounded-full text-sm focus:outline-none shadow-sm"
            placeholder="Search..."
          />
          <AiOutlineSearch className="dark:text-white absolute top-1/2 transform -translate-y-1/2 right-1 sm:left-3 text-gray-500" size={20} />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <FaBell className="text-gray-300 hover:text-icon_pink cursor-pointer" size={20} />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-icon_orange rounded-full"></span>
        </div>

        {/* Avatar */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="hidden sm:block h-10 w-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
