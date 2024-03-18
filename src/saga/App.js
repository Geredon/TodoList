import './App.scss';
import { Logo } from "./components/Logo/Logo";
import { TasksLayout } from "./components/TaskLayout/TaskLayout";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducers";
import rootSaga from "./redux/sagas";
import { logger } from "redux-logger";

function App() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store}>
            <div className="wrapper">
                <Logo/>
                <TasksLayout/>
            </div>
        </Provider>
    )
}

export default App;
