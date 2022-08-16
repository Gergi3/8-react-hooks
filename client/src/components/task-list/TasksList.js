import { TaskItem } from "./task-item/TaskItem";

export const TasksList = () => {
    return (
        <>
            <h4>Tasks:</h4>
            <ul>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </ul>
        </>
    );
};
