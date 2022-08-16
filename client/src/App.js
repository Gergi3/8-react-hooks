import { useState } from 'react';

import { TasksList } from './components/task-list/TasksList';
import { CreateTask } from './components/create-task/CreateTask';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header>
                <h1>TASKS APP ✍️</h1>
            </header>

            <main>
                <TasksList />
                <CreateTask />
            </main>
        </div>
    );
}

export default App;
