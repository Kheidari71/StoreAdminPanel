import React from 'react';


const Card = ({title,icon,price, className}) => {
    return (
       
             <div className="flex justify-center items-center rounded-xl w-2/3 sm:w-1/2 lg:w-1/5 h-28 bg-white dark:bg-gray-400  mx-2 space-x-2">
          <div  className={className}>
            {icon}

          </div>
          <div className="flex flex-col">
            <p className="text-md font-thin text-card&table dark:text-gray-200">
              {title}
            </p>
            <p className="text-lg dark:text-gray-100">{price}</p>
          </div>
        </div>
     
    );
}

export default Card;
