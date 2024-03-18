import { takeEvery, put, call, all } from "redux-saga/effects"
import { ADD_TASK, DELETE_TASK, GET_TASKS } from "../actions/actionsTypes";
import { putTaskAction, removeData, setTasksAction } from "../actions/actions";
import { createTask, deleteTask, getTasks } from "../api/api";

function* workerGetTasks() {
    try {
        const data = yield call(getTasks);
        yield put(setTasksAction(data));
    } catch (error) {
        console.error(error.message);
    }
}

function* workerDeleteTask({payload}) {
    try {
        yield call(deleteTask, payload);
        yield put(removeData(payload))
    } catch (error) {
        console.error(error.message);
    }
}

function* workerAddTask({payload}) {
    try {
        const data = yield call(createTask, payload);
        yield put(putTaskAction(data));
    } catch (error) {
        console.error(error.message);
    }
}

function* watchGetTasks() {
    yield takeEvery(GET_TASKS, workerGetTasks);
}

function* watchAddTask() {
    yield takeEvery(ADD_TASK, workerAddTask);
}

function* watchDeleteTask() {
    yield takeEvery(DELETE_TASK, workerDeleteTask)
}

export default function* rootSaga() {
    yield all([
        watchGetTasks(),
        watchDeleteTask(),
        watchAddTask(),
    ])
}
