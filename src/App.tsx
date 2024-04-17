import { useReducer } from "react"
import TaskContext from "./state-management/contexts/TaskContext"
import NavBar from "./components/navbar/NavBar"
import Tasks from "./components/Tasks"
import taskReducer from "./state-management/reducers/taskReducer"
import AuthProvider from "./state-management/providers/AuthProvider"

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, [])
  
  return (<>
    <TaskContext.Provider value={{ tasks, taskDispatch }}>
      <AuthProvider>
        <NavBar />
        <Tasks />
      </AuthProvider>
    </TaskContext.Provider>
  </>)
}

export default App