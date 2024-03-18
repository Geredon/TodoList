export const getTasks = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
};

export const createTask = (title) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            completed: false,
        })
    })
        .then((response) => response.json())
};

export const deleteTask = (taskId) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
        method: "DELETE",
    });
};
