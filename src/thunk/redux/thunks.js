import { createTask, deleteTask, getTasks } from "../api/api";
import { addDataAction, putDataAction, removeDataAction } from "../actions/actions";

export const getAllTasksThunk = async (dispatch) => {
    try {
        const data = await getTasks();
        dispatch(putDataAction(data));
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteTaskThunk = (taskId) => async (dispatch) => {
    try {
        await deleteTask(taskId);
        dispatch(removeDataAction(taskId));
    } catch (error) {
        console.error(error.message);
    }
}

export const createTaskThunk = (title) => async (dispatch, getState) => {
    try {
        const data = await createTask(title);
        dispatch(addDataAction(data));
    } catch (error) {
        console.error(error.message);
    }
};
