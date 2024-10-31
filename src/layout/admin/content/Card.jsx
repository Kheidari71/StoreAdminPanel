import React from 'react';


const Card = ({title,icon,price, className}) => {
    return (
       
             <div className="flex  md:justify-center items-center rounded-xl w-2/3 md:w-1/4 lg:w-1/4 sm:w-60 xl:w-1/5 h-28 bg-white dark:bg-gray-400  mx-8 space-x-2  pl-7 md:pl-3 lg:pl-0  mb-3">
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
