import React, { Dispatch } from "react"
import { Task, TaskAction } from "../providers/TaskProvider";


interface TaskContextType {
    tasks: Task[];
    taskDispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType)

export default TaskContext;