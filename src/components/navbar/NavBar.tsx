
import { useContext } from 'react'
import styles from './NavBar.module.css'
import TaskContext from '../contexts/TaskContext'

const NavBar = () => {
  const {tasks} = useContext(TaskContext)
  
  return (
    <div className={[styles.navbar,"bg","bg-primary"].join(" ")}>
      <h1><span className="badge">{tasks.length}</span></h1>
      <button className="btn btn-primary btn-lg">login</button>
    </div>
  )
}

export default NavBar