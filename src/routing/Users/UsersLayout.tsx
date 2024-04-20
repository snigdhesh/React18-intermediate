import { Outlet } from 'react-router-dom'
import UserList from './UserList'

const UsersLayout = () => {
    return (
        <div className="row">
            <div className="col">
                <UserList />
            </div>
            <div className="col">
                <Outlet />{/*  We need this to fetch child components  */}
            </div>
        </div>
    )
}

export default UsersLayout