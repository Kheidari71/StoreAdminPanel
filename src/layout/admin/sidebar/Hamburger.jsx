import React from 'react';


const Hamburger = ({toggleSidebar , icon}) => {
    return (
        <div>
            <button onClick={toggleSidebar}>
          {icon}
        </button>
        </div>
    );
}

export default Hamburger;
