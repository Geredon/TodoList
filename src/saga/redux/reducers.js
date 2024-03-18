import { DELETE_TASK, PUT_TASK, SET_TASKS, UPDATE_TASK } from "../actions/actionsTypes";

const initialState = {
    listTasks: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {...state, listTasks: action.payload};
        case PUT_TASK:
            return {...state, listTasks: [...state.listTasks, action.payload]};
        case DELETE_TASK:
            const updateListTask = state.listTasks.filter((task) => task.id !== action.payload);
            return {...state, listTasks: [...updateListTask]}
        case UPDATE_TASK:
            const updateListTasks = state.listTasks.map((task) => {
                if (task.id === action.payload.taskId) {
                    return {
                        ...task,
                        completed: action.payload.completed,
                    }
                }
                return task;
            })
            return {...state, listTasks: updateListTasks}
        default:
            return state;
    }
};



