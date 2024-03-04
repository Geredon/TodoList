import {AddTask} from "../AddTask/AddTask";
import {InfoTasks} from "../InfoTasks/InfoTasks";
import {TasksList} from "../TaskList/TasksList";

export const TasksLayout= () => {
    return (
        <div className="container-tasks">
            <AddTask/>
            <InfoTasks/>
    `       <TasksList/>
        </div>
    );
};
