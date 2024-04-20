import { Link } from "react-router-dom"

const UserList = () => {
    const users = [
        { id: 1, name: "Mosh" },
        { id: 2, name: "John" },
        { id: 3, name: "Harry" }
    ]
    return (
        <div>
            <ul className="list-group">
                {users.map(user => <li className="list-group-item" key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>)}
            </ul>
        </div>
    )
}

export default UserList