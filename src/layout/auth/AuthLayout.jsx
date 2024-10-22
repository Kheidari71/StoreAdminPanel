import Login from '../../pages/authorize/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStatus } from '../../hooks/authHook';
import LoadingSpinner from '../../components/LoadingSpinner';

const AuthLayout = ({ theme, setteme }) => {
    const {isLoading ,isLoggedIn} = useAuthStatus()
   
return isLoading ? <LoadingSpinner theme={theme} setteme={setteme}/> : isLoggedIn ? (
    <Navigate to="/"/>
):(
<div>
<Routes>
<Route path="/login" element={<Login theme={theme} setteme={setteme} />} />
</Routes>
</div>
)

}

export default AuthLayout;
