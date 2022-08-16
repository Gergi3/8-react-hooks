import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";

export const CreateTask = () => {
    const [title, setTitle] = useState('');
    const { createTaskHandler } = useContext(TaskContext);

    const submitHandler = (e) => {
        e.preventDefault()
        createTaskHandler(title);
        setTitle('')
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="name" onChange={onTitleChange} value={title} />
            <input type="submit" value="Add Task" />
        </form>
    );
};
