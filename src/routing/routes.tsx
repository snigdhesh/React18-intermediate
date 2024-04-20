import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";


const routes = [
    {path: '/', element: <HomePage/>},
    {path: '/users', element: <UserListPage/>},
    {path: '/contact', element: <ContactPage/>}
]
const router = createBrowserRouter(routes)

export default router