const url = 'http://localhost:3030/jsonstore/tasks';

const createTask = (title) => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, isCompleted: false })
    };

    return fetch(url, options)
        .then(res => res.json())
        .catch(err => console.log(err))
};

const updateTask = (data) => {
    const options = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch(`${url}/${data._id}`, options)
        .then(res => res.json())
        .catch(err => console.log(err))
};

const deleteTask = (id) => {
    const options = {
        method: 'DELETE',
    };

    return fetch(`${url}/${id}`, options)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const useTasks = () => {
    return {
        createTask,
        deleteTask,
        updateTask
    }
}