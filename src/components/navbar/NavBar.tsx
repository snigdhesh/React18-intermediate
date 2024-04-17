
import { useContext } from 'react'
import TaskContext from '../../state-management/contexts/TaskContext'
import useAuth from '../../state-management/hooks/useAuth'
import styles from './NavBar.module.css'
import useCounterStore from '../counter/store'

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const { username, authDispatch } = useAuth()
  const counter = useCounterStore(s => s.counter)
  //You need to get only necessary items from store. Else components renders unnecessarily 
  //But why?  counterStore structure has {counter,max, increment, reset, resetMax}, if max number changes, navbar gets re-rendered. We don't want that.
  //If we want to control navbar rendering only if counter changes, use the syntax above. Now rendering depends on counter only.
  //Meaning if counter changes, navbar re-renders - which can be observed in console logs.

  console.log("Rendered navbar")
  return (
    <div className={[styles.navbar, "bg", "bg-primary"].join(" ")}>
      <h1><span className="badge">Task count : {tasks.length}</span></h1>
      <h1><span className="badge">counter : {counter}</span></h1>
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