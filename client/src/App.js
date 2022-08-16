import { useEffect } from 'react';

import { useFetch } from './hooks/useFetch';
import { useTasks } from './hooks/useTasks';
import { TaskContext } from './contexts/TaskContext';
import { TasksList } from './components/task-list/TasksList';
import { CreateTask } from './components/create-task/CreateTask';
import './App.css';

function App() {
    const [tasks, setTasks] = useFetch('http://localhost:3030/jsonstore/tasks', 'GET');
    const { createTask, deleteTask, updateTask } = useTasks();

    useEffect(() => {
        setTasks(oldTasks => Object.values(oldTasks))
    }, [setTasks]);

    const createTaskHandler = (title) => {
        createTask(title)
            .then(res => {
                setTasks(old => [
                    ...old,
                    res
                ]);
            });
    }

    const deleteTaskHandler = (taskId) => {
        deleteTask(taskId)
            .then(res => {
                setTasks(old => old.filter(x => x._id !== res._id));
            })
    }

    const changeTaskStatusHandler = (task) => {
        const newData = { ...task, isCompleted: !task.isCompleted }
        updateTask(newData)
            .then(res => {
                setTasks(old => old.map(x => x._id === res._id ? newData : x));
            })
    }

    return (
        <div className="app-wrapper">
            <header>
                <h1>TASKS APP ✍️</h1>
            </header>

            <main>
                <TaskContext.Provider value={{tasks, createTaskHandler, deleteTaskHandler, changeTaskStatusHandler}}>
                    <TasksList />
                    <CreateTask />
                </TaskContext.Provider>
            </main>
        </div>
    );
}

export default App;
