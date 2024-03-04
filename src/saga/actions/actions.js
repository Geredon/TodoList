import {ADD_TASK, DELETE_TASK, GET_TASKS, PUT_TASK, PUT_TASKS, REMOVE_DATA, UPDATE_TASK} from "./actionsTypes";

export const putData = (listTask) => ({
    type: PUT_TASKS,
    payload: listTask,
});

export const getAllTasks =  () => ({
    type: GET_TASKS,
});

export const removeData = (task) => ({
    type: REMOVE_DATA,
    payload: task,
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
});

export const putTask = (newTask) => ({
    type: PUT_TASK,
    payload: newTask,
});

export const addTask = (taskId) => ({
    type: ADD_TASK,
    payload: taskId,
});

export const updateTask = (task) => ({
    type: UPDATE_TASK,
    payload: task,
});
