import { useContext } from "react";

import { TaskContext } from "../../../contexts/TaskContext";

export const TaskItem = ({
    task
}) => {
    const { deleteTaskHandler, changeTaskStatusHandler } = useContext(TaskContext)

    const deleteTaskClickHandler = () => {
        deleteTaskHandler(task._id);
    }

    const changeTaskStatusClickHandler = () => {
        changeTaskStatusHandler(task);
        // updateTaskHandler()
    }

    return (
        <>
            <li style={{textDecoration: task.isCompleted ? 'line-through' : ''}}>
                {task.title}
            </li>
            <span><button onClick={deleteTaskClickHandler}>Delete</button></span>
            <span><button onClick={changeTaskStatusClickHandler}>{task.isCompleted ? 'Unfinish' : 'Finish'}</button></span>
        </>
    );
};
