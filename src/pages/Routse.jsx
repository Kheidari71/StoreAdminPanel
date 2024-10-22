import React from 'react';
import ViewUsers from './view Users/ViewUsers';
import ManageProduct from './manage product/ManageProducts';
import ManageProductGroups from './manage Product Ggroups/ManageProductGroups';
import ManageBrands from './manage Brands/ManageBrands';
import ManageCards from './manage Cards/ManageCards';
import ManageOrders from './manage Orders/ManageOrders';
import ShippingMethod from './shipping Method/ShippingMethod';
import Roles from './roles/Roles';
import Permissions from './permissions/Permissions';
import Questions from './questions/Questions';
import Comments from './comments/Comments';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Login from './authorize/Login';
const Routse = () => {
    // const [path, setPath] = useState("/")
    return (
        <div className='z-100 w-full h-full '>
            {/* {
                path === "/" ?  <Dashboard /> : path === "/manageProduct" ? <ManageProduct /> ...
            } */}
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/manageProduct' element={<ManageProduct />} />
                <Route path='/manageProductGroups' element={<ManageProductGroups />} />
                <Route path='/login' element={<Login />} />
                <Route path='/manageBrands' element={<ManageBrands />} />
                <Route path='/manageCards' element={<ManageCards />} />
                <Route path='/manageOrders' element={<ManageOrders />} />
                <Route path='/shippingMethod' element={<ShippingMethod />} />
                <Route path='/viewUsers' element={<ViewUsers />} />
                <Route path='/roles' element={<Roles />} />
                <Route path='/permissions' element={<Permissions />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/comments' element={<Comments />} />
                <Route path='*' element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default Routse;
