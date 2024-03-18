import {
    ADD_TASK,
    DELETE_TASK,
    GET_TASKS,
    PUT_TASK,
    REMOVE_DATA,
    SET_TASKS,
    UPDATE_TASK
} from "./actionsTypes";

export const setTasksAction = (listTask) => ({
    type: SET_TASKS,
    payload: listTask,
});

export const getAllTasksAction =  () => ({
    type: GET_TASKS,
});

export const removeData = (task) => ({
    type: REMOVE_DATA,
    payload: task,
});

export const deleteTaskAction = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
});

export const putTaskAction = (newTask) => ({
    type: PUT_TASK,
    payload: newTask,
});

export const addTaskAction = (taskId) => ({
    type: ADD_TASK,
    payload: taskId,
});

export const updateTaskAction = (task) => ({
    type: UPDATE_TASK,
    payload: task,
});
