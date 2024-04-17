import { ReactNode, useReducer } from 'react';

import TaskContext from '../contexts/TaskContext';
import taskReducer from '../reducers/taskReducer';

interface Props {
    children: ReactNode
}


const TaskProvider = ({ children }: Props) => {
    const [tasks, taskDispatch] = useReducer(taskReducer, [])
    return (
        <TaskContext.Provider value={{ tasks, taskDispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider