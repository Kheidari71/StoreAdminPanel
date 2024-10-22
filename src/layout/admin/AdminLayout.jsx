import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import { Navigate } from 'react-router-dom';
import { useAuthStatus } from "../../hooks/authHook";
import LoadingSpinner from '../../components/LoadingSpinner';
const Index = ({ theme, setteme }) => {
 
    const {isLoading ,isLoggedIn} = useAuthStatus()

    return isLoading ? <LoadingSpinner theme={theme} setteme={setteme}/> : !isLoggedIn ?  <Navigate to="/auth/login"/>  : (
        
        <div theme={theme}>

            <Header theme={theme} setteme={(t) => setteme(t)} />
            <Sidebar />
            <Content />
        </div>
    );
}

export default Index;
