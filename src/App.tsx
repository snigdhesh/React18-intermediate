import { useContext, useReducer } from "react"
import TaskContext from "./components/contexts/TaskContext"
import NavBar from "./components/navbar/NavBar"
import Tasks from "./components/Tasks"
import taskReducer from "./reducers/taskReducer"

function App() {
  const [tasks,dispatch] = useReducer(taskReducer,[])
  return (<>
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <Tasks />
    </TaskContext.Provider>
  </>)
}

export default App