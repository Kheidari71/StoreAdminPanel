import React from 'react';
import { NavLink} from 'react-router-dom';

const SidebarItem = ({ toggleSidebar, icon, title, path }) => {


    const handleClick = () => {
        toggleSidebar();
      
    };
    return (

        <li className="flex relative items-center mb-2">
          <NavLink to={path} className={({isActive})=>isActive && "text-blue-500 active_link" }>
            {/* Background indicator */}
            <div className="active_element bg-menu_item_on absolute w-1 h-full left-0 top-0 border-emerald-600 rounded-r-md"></div>
            <div onClick={handleClick} className="  cursor-pointer  pl-6 mb-2 flex items-center font-extralight">
                {icon} <span>{title}</span>
            </div>
          </NavLink>
        </li>

    );
}

export default SidebarItem;
