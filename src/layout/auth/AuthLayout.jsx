import Login from '../../pages/authorize/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStatus } from '../../hooks/authHook';
import LoadingSpinner from '../../components/LoadingSpinner';

const AuthLayout = () => {
    const {isLoading ,isLoggedIn} = useAuthStatus()
   
return isLoading ? <LoadingSpinner /> : isLoggedIn ? (
    <Navigate to="/"/>
):(
<div>
<Routes>
<Route path="/login" element={<Login/>} />
</Routes>
</div>
)

}

export default AuthLayout;
