import { FormEvent, useContext, useRef } from "react";
import TaskContext from "../state-management/contexts/TaskContext";

const Tasks = () => {
    const taskRef = useRef<HTMLInputElement>(null);
    //const [tasks, dispatch] = useReducer(taskReducer, []);
    const context = useContext(TaskContext)

    const onSubmit = (event: FormEvent) => {
        if (taskRef.current && taskRef.current.value)
            context.taskDispatch({ type: 'ADD', task: { id: context.tasks.length + 1, name: taskRef.current.value } })

        event.preventDefault()
    }
    return (
        <>
            <div className="container mt-5">
                <form onSubmit={(event) => onSubmit(event)}>
                    <div className="row">
                        <div className="col-10">
                            <input ref={taskRef} type="text" className="form-control" />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
                <div className="row mt-5">
                    <ul className="list-group">
                        {context.tasks.map(task => <li className="list-group-item" key={task.id} style={{ display: "flex", justifyContent: "space-between" }}>
                            {task.name}
                            <button className="btn btn-outline-danger" onClick={() => context.taskDispatch({ type: 'DELETE', taskId: task.id })}>delete</button>
                        </li>)}
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Tasks