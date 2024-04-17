
export interface Task {
    id: number;
    name: string;
}


interface AddTask {
    type: 'ADD'
    task: Task
}

interface DeleteTask {
    type: 'DELETE'
    taskId: number
}

type TaskAction = AddTask | DeleteTask

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD': return [...tasks, action.task];
        case 'DELETE': return tasks.filter(task => task.id != action.taskId);
    }
    return tasks;
}

export default taskReducer