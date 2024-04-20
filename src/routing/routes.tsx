import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";
import UserDetailPage from "./Users/UserDetailPage";
import UsersLayout from "./Users/UsersLayout";


const routes = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> }, /* index:true     is same as   path: ''   */
            {path: 'login', element: <Login/>}
    ]
    },
    {
        element: <PrivateRoutes/>,
        children: [
            {
                path: 'users',
                element: <UsersLayout />,
                children: [
                    { path: ':id', element: <UserDetailPage /> }
                ]
            }
        ]
    }

]
const router = createBrowserRouter(routes)

export default router