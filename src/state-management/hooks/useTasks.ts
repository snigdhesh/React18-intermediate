import { useContext } from "react";
import TaskContext from "../contexts/TaskContext";

const useTasks = () => useContext(TaskContext)

export default useTasks