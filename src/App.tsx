import NavBar from "./components/navbar/NavBar"
import Tasks from "./components/Tasks"
import AuthProvider from "./state-management/providers/AuthProvider"
import TaskProvider from "./state-management/providers/TaskProvider"

function App() {


  return (<>
    <TaskProvider>
      <AuthProvider>
        <NavBar />
        <Tasks />
      </AuthProvider>
    </TaskProvider>

  </>)
}

export default App