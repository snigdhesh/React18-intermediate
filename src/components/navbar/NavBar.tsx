
import { useContext } from 'react'
import styles from './NavBar.module.css'
import TaskContext from '../../state-management/contexts/TaskContext'
import AuthContext from '../../state-management/contexts/AuthContext'

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const { username, authDispatch } = useContext(AuthContext);

  return (
    <div className={[styles.navbar, "bg", "bg-primary"].join(" ")}>
      <h1><span className="badge">{tasks.length}</span></h1>
      {
        username ?
          <>
            <h1 className="display-6 text-white">{username}</h1>
            <button className="btn btn-primary btn-lg" onClick={() => authDispatch({ type: 'LOGOUT' })}>Logout</button>
          </>
          :
          <button className="btn btn-primary btn-lg" onClick={() => authDispatch({ type: 'LOGIN', username: 'Naga Vadlapudi' })}>Login</button>}
    </div>
  )
}

export default NavBar