import { ADD_TASK, DELETE_TASK, SET_TASKS, UPDATE_TASK } from "./actionsTypes";

export const putDataAction = (payload) => ({
    type: SET_TASKS,
    payload,
});

export const removeDataAction = (payload) => ({
    type: DELETE_TASK,
    payload,
})

export const addDataAction = (payload) => ({
    type: ADD_TASK,
    payload,
});

export const updateTaskAction = (payload) => ({
    type: UPDATE_TASK,
    payload,
});
