import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";
import HomePage from "./HomePage";


const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
           {index:true, element: <HomePage/>}, /* index:true     is same as   path: ''   */
           {path: 'users', element: <UserListPage/>},
           {path: 'user/:id',element: <UserDetailPage/>}
        ]
    }

]
const router = createBrowserRouter(routes)

export default router