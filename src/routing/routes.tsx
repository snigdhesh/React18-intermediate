import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";


const routes = [
    {path: '/', element: <HomePage/>},
    {path: '/users', element: <UserListPage/>}
]
const router = createBrowserRouter(routes)

export default router