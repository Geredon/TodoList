import {DELETE_TASK, ADD_TASK, PUT_TASKS} from "../actions/actionsTypes";

const initialState = {
    listTasks: [],
}

export const reducer = (state= initialState, action) => {
    switch (action.type) {
        case PUT_TASKS:
            return {...state, listTasks: action.payload};
        case ADD_TASK:
            return {...state, listTasks: [...state.listTasks, action.payload]};
        case DELETE_TASK:
            const updateListTask = state.listTasks.filter((task) => task.id !== action.payload);
            return {...state, listTasks: [...updateListTask]}
        default:
            return state;
    }
};



