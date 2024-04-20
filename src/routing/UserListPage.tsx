
const UserListPage = () => {
    const users = [
        {id: 1, name: "Mosh"},
        {id: 2, name: "John"},
        {id: 3, name: "Harry"}
    ]
  return (
    <div>
        <ul className="list-group">
            {users.map(user => <li className="list-group-item" key={user.id}>
                <a href="">{user.name}</a>
                </li>)}
        </ul>
    </div>
  )
}

export default UserListPage