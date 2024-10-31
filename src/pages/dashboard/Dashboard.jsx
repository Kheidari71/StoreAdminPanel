import React from 'react';
import Table from '../../layout/admin/content/Table';
import Card from '../../layout/admin/content/Card';
import ChartImage from "../../assets/chart.png";
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';
import { IoMdStats } from 'react-icons/io';

const tableArray= [
    { id: 444, category: "Pans", title: "Frying Pan", status: "Low Stock (1)" },
    { id: 445, category: "Kettles", title: "Kettle", status: "In Stock" },
    { id: 446, category: "Spoons", title: "Spoon", status: "In Stock" },
    { id: 447, category: "Forks", title: "Fork", status: "In Stock" },
    { id: 448, category: "Cups", title: "Cup", status: "In Stock" },
    { id: 449, category: "Plates", title: "Plate", status: "Low Stock (2)" },
    { id: 449, category: "Plates", title: "Plate", status: "Low Stock (2)" },
    { id: 449, category: "Plates", title: "Plate", status: "Low Stock (2)" }
  ]
  
  
  //card array
  const cardArray = [
    { className : "flex justify-center items-center w-16 h-16 rounded-full bg-bg_icon_orange" ,icon : <FaShoppingCart  className="text-icon_orange hover:text-gray-800 cursor-pointer"
      size={20}/> ,title : "Today's transaction" , price:"412,200"} , 
    {className : "flex justify-center items-center w-16 h-16 rounded-full bg-bg_icon_blue" , icon : <AiOutlineDollar  className="text-icon_blue hover:text-gray-800 cursor-pointer"
      size={20}/> ,title : "Today's income" , price:"412,750"} , 
    {className : "flex justify-center items-center w-16 h-16 rounded-full bg-bg_icon_pink" ,icon : <IoMdStats  className="text-icon_pink hover:text-gray-800 cursor-pointer"
      size={20}/> ,title : "Last week transaction" , price:"412,00"} , 
    {className : "flex justify-center items-center w-16 h-16 rounded-full bg-bg_icon_green" ,icon : <RiMoneyDollarCircleLine  className="text-icon_green hover:text-gray-800 cursor-pointer"
      size={20}/> ,title : "Last week income" , price:"548,750"} , 
  ]

const Dashboard = () => {
    return(
        <div>
          <div className="flex flex-wrap justify-center items-center mx-auto mt-11">
         {cardArray.map(item=>(<Card {...item}/>))}
           <div/>
    
          </div>
    
          {/* chart and table */}
          {/*diffrence between lg:space-x-12 & mx-10*/}
          {/*Actions in table isnt at the middle*/}
          <div className="flex flex-col lg:flex-row lg:space-x-12 pb-40 justify-center items-center mt-11 px-12">
            {/* Chart Container */}
            <div className="flex justify-center items-center w-full lg:w-1/2">
              <img className="w-full h-auto max-w-lg" src={ChartImage} alt="chart" />
            </div>
    
            {/* Table Container */}
           <Table data={tableArray}/>
          </div>
        </div>
    
      );
};

export default Dashboard;