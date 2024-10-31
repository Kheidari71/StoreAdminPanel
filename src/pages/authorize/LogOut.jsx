import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';
import Login from './Login';
import { Alert } from '../../components/Alert';
import { useAuthLogOut } from '../../hooks/logoutHook';
const LogOut = () => {
const {loading , setLoading} = useAuthLogOut()
    return (

        <div>
           {loading ? (
<LoadingSpinner/>
           ): (
<Navigate to="/auth/login"/>
           )}
        </div>
    );
}

export default LogOut;
