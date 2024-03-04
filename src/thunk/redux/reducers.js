import { DELETE_TASK, ADD_TASK, PUT_TASKS, UPDATE_TASK } from "../actions/actionsTypes";

const initialState = {
    listTasks: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_TASKS:
            return {...state, listTasks: action.payload};
        case ADD_TASK:
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



