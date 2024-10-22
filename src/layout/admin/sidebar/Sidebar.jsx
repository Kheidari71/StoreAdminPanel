import React, { useState } from "react";
import SidebarItem from "./SidebarItem"
import Hamburger from "./Hamburger";

import {
  FaTachometerAlt,
  FaStore,
  FaBoxes,
  FaCogs,
  FaTags,
  FaPalette,
  FaPercentage,
 
  FaUsers,
  FaQuestionCircle,
  FaComments,
  FaUserShield,
  FaUnlockAlt,
} from "react-icons/fa"; // Import icons from react-icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For hamburger menu



const sidebarArray = [
    {
      title: "", items: [
        { title: "Dashboard", icon: <FaTachometerAlt className="mr-6"/> ,path: '/'}
    
      ]
    },

  {
    title: "Store", items: [
      { title: "Manage Product", icon: <FaStore className="mr-6"/> ,path: '/manageProduct'},
      { title: "Manage Product Groups", icon: <FaBoxes className="mr-6" /> ,path: '/manageProductGroups'},
      { title: "Manage Brands", icon: <FaCogs className="mr-6" />,path: '/managebrands' },
    ]
  },
  {
    title:"Orders and Cards" ,items: [
      { title: "Manage Cards", icon: <FaTags className="mr-6" /> ,path: '/manageCards'},
      { title: "Manage Orders", icon: <FaPalette className="mr-6" /> ,path: '/manageOrders'},
      { title: "Shipping Method", icon: <FaPercentage className="mr-6" /> ,path: '/shippingMethod'}
    ]
  },
  {
    title: "Users and Cards", items: [
{title :"View Users" , icon: <FaUsers className="mr-6" /> ,path: '/viewUsers'},
{title :"Roles" , icon: <FaUserShield className="mr-6" /> ,path: '/roles'},
{title :"Permissions" , icon: <FaUnlockAlt className="mr-6" /> ,path: '/permissions'}
    ]
  },
  {
    title : "Communications" , items:[
      {title : "Questions" , icon: <FaQuestionCircle className="mr-6"/> ,path: '/Questions'},
      {
        title: "Comments" , icon :<FaComments className="mr-6"/>,path: '/Comments'
      }
    ]
  }
]


// const obj = ["" , ""]
// const obj2 = [...obj]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    
  };


  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-white dark:bg-gray-600  h-screen fixed top-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } w-72 lg:w-72 transition-transform duration-300 ease-in-out z-50`}
        style={{ overflowY: "auto" }} // Prevents vertical overflow
      >
        <div className=" flex items-center justify-end px-4 pt-4 ">
          <button onClick={toggleSidebar}>
            <AiOutlineClose className="text-blue-500 dark:text-gray-300" size={24} />
          </button>
        </div>

        <div className="py-8 text-md font-inter">
          <ul>
        
            {sidebarArray.map((topItem, i) => (
              <li key={i+"_sideItems"} className="text-menu_subItem mb-2 dark:text-gray-100 font-medium">
                <div className= "ml-7 mb-4">{topItem.title}</div>
                <ul className="pl-0 mb-6">
                  {topItem.items.map((item, j) => (
                    <SidebarItem key={i+"_"+j+"_subItems"} toggleSidebar={toggleSidebar} {...item} />
                  ))}
                </ul>
              </li>
            ))}

          </ul>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <div className="text-menu_item_on lg:block fixed top-4 left-4 z-50">
        <Hamburger toggleSidebar={toggleSidebar} icon={  <AiOutlineMenu className="text-blue-500 dark:text-gray-300" size={30} />}/>
      </div>
    </div>
  );
};

export default Sidebar;
