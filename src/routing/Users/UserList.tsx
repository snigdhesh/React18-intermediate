import { Link } from "react-router-dom"

const UserList = () => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe'},
        { id: 3, name: 'Jane' },
        { id: 4, name: 'Smith' },
        { id: 5, name: 'Alex'},
        { id: 6, name: 'Max'},
        { id: 7, name: 'Sam'},
        { id: 8, name: 'Tom'},
        { id: 9, name: 'Jerry'},
        { id: 10, name: 'Mickey'}
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