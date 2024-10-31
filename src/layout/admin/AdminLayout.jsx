import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import { Navigate } from 'react-router-dom';
import { useAuthStatus } from "../../hooks/authHook";
import LoadingSpinner from '../../components/LoadingSpinner';
const Index = () => {
 
    const {isLoading ,isLoggedIn} = useAuthStatus()

    return isLoading ? <LoadingSpinner /> : !isLoggedIn ?  <Navigate to="/auth/login"/>  : (
        
        <div>
          <Header />
            <Sidebar />
            <Content />
        </div>
    );
}

export default Index;
