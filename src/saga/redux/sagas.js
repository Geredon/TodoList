import { takeEvery, put, call, all } from "redux-saga/effects"
import { ADD_TASK, DELETE_TASK, GET_TASKS } from "../actions/actionsTypes";
import { putData, putTask, removeData } from "../actions/actions";
import { createTask, deleteData, getTasks } from "../api/api";
import { message } from "antd";

function* workerGetTasks() {
    try {
        const data = yield call(getTasks);
        yield put(putData(data));
    } catch (error) {
        console.error(error.message);
    }
}

function* workerDeleteTask({payload}) {
    try {
        yield call(deleteData, payload);
        yield put(removeData(payload))
    } catch (error) {
        console.error(error.message);
    }
}

function* workerAddTask({payload}) {
    try {
        const data = yield call(createTask, payload);
        yield put(putTask(data));
    } catch (error) {
        console.error(message);
    }
}

export function* watchGetTasks() {
    yield takeEvery(GET_TASKS, workerGetTasks);
}

export function* watchDeleteTask() {
    yield takeEvery(DELETE_TASK, workerDeleteTask)
}

export function* watchAddTask() {
    yield takeEvery(ADD_TASK, workerAddTask);
}

export default function* rootSaga() {
    yield all([
        watchGetTasks(),
        watchDeleteTask(),
        watchAddTask(),
    ])
}
