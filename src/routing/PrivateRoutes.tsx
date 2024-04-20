import { Navigate } from 'react-router-dom';
import useRouteAuth from './useRouteAuth';
import Layout from './Layout';

const PrivateRoutes = () => {
    const {user} = useRouteAuth();
    if(!user) return <Navigate to="/login" />
    return <Layout />
}

export default PrivateRoutes