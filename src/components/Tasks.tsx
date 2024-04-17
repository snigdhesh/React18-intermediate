import { FormEvent, useReducer, useRef } from "react";
import taskReducer from "../reducers/taskReducer";

const Tasks = () => {
    const taskRef = useRef<HTMLInputElement>(null);
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const onSubmit = (event: FormEvent) => {
        if (taskRef.current && taskRef.current.value)
            dispatch({ type: 'ADD', task: { id: tasks.length + 1, name: taskRef.current.value } })

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
                        {tasks.map(task => <li className="list-group-item" key={task.id} style={{ display: "flex", justifyContent: "space-between" }}>
                            {task.name}
                            <button className="btn btn-outline-danger" onClick={() => dispatch({ type: 'DELETE', taskId: task.id })}>delete</button>
                        </li>)}
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Tasks