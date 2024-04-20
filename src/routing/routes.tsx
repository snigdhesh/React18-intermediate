import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import UserDetailPage from "./Users/UserDetailPage";
import UserList from "./Users/UserList";
import HomePage from "./HomePage";
import UsersLayout from "./Users/UsersLayout";


const routes = [
    {
        path: '/',
        element: <Layout />,
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