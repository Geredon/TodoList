import './App.css';
import {Logo} from "./components/Logo/Logo";
import {TasksLayout} from "./components/TaskLayout/TaskLayout";

function App() {
    return (
        <div className="wrapper">
            <Logo/>
            <TasksLayout/>
        </div>
    )
}

export default App;
