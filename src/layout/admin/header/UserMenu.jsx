import { BiLogOut } from "react-icons/bi";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useAuthStatus } from "../../../hooks/authHook";
import { NavLink} from 'react-router-dom';

const UserMenu = () => {
  const {userInfo } = useAuthStatus();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    console.log("Logging out...");
    // Perform logout logic (e.g., clear localStorage, redirect, etc.)
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button with ChevronDown Icon */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-1 px-2 py-1 text-sm border rounded-md border-transparent"
      >
       <p className="font-medium dark:text-icon_white text-center"> {userInfo.user_name}</p>
       
        <FaChevronDown className="h-3 w-3" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className=" items-center font-inter absolute left-0 w-24 origin-top-right bg-transparent border rounded-md shadow-lg"
        >
         
          <button
            onClick={handleLogout}
            className="items-center text-sm w-full px-2 py-2 text-left dark:text-white dark:hover:text-orange-300 hover:text-orange-300"
          >
            <NavLink to={"./logOut"}>
             <BiLogOut className="mx-1 h-4 w-4 inline" />
            Logout
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;