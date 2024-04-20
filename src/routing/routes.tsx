import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import UserDetailPage from "./Users/UserDetailPage";
import UserList from "./Users/UserList";
import HomePage from "./HomePage";
import UsersLayout from "./Users/UsersLayout";
import ErrorPage from "./ErrorPage";


const routes = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> }, /* index:true     is same as   path: ''   */
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