import {ADD_TASK, DELETE_TASK, PUT_TASKS, UPDATE_TASK} from "./actionsTypes";
import {createTask, deleteData, getTasks} from "../api/api";

export const putData = (payload) => ({
    type: PUT_TASKS,
    payload,
});

export const getAllTasks = async (dispatch) => {
    try {
        const data = await getTasks();
        dispatch(putData(data));
    } catch (error) {
        console.error(error.message);
    }
}

export const removeData = (payload) => ({
    type: DELETE_TASK,
    payload,
})

export const deleteTask = (taskId) => async (dispatch) => {
    try {
        await deleteData(taskId);
        dispatch(removeData(taskId));
    } catch (error) {
        console.error(error.message);
    }
}

export const addData = (payload) => ({
    type: ADD_TASK,
    payload,
});

export const addTask = (title) => async (dispatch) => {
    try {
        const data = await createTask(title);
        dispatch(addData(data));
    } catch (error) {
        console.error(error.message);
    }
};

export const updateTask = (payload) => ({
    type: UPDATE_TASK,
    payload,
});
