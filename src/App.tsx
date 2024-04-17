import { useReducer } from "react"
import TaskContext from "./components/contexts/TaskContext"
import NavBar from "./components/navbar/NavBar"
import Tasks from "./components/Tasks"
import taskReducer from "./reducers/taskReducer"
import authReducer from "./reducers/authReducer"
import AuthContext from "./components/contexts/AuthContext"

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, [])
  const [username, authDispatch] = useReducer(authReducer, '')
  return (<>
    <TaskContext.Provider value={{ tasks, taskDispatch }}>
      <AuthContext.Provider value={{ username, authDispatch }}>
        <NavBar />
        <Tasks />
      </AuthContext.Provider>
    </TaskContext.Provider>
  </>)
}

export default App