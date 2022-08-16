import { useContext } from "react";

import { TaskContext } from "../../contexts/TaskContext";
import { TaskItem } from "./task-item/TaskItem";

export const TasksList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <>
            <h4>Tasks:</h4>
            <ul>
                {tasks.map(task => 
                    <TaskItem key={task._id} task={task} />
                )}
            </ul>
        </>
    );
};
