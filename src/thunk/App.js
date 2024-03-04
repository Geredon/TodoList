import './App.scss';
import { Logo } from "./components/Logo/Logo";
import { TasksLayout } from "./components/TaskLayout/TaskLayout";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./redux/reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

export const App = () => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

    return (
        <Provider store={store}>
            <div className="wrapper">
                <Logo/>
                <TasksLayout/>
            </div>
        </Provider>
    )
}
