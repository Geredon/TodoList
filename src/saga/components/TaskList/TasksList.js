import React, {useEffect} from 'react';
import {Checkbox} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, getAllTasks, updateTask} from "../../actions/actions";

export const TasksList = () => {
    const taskList = useSelector((state) => state.listTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks);
    }, [])

    const handleCheckbox = (event, taskId) => {
        if (event.target.checked) {
            dispatch(updateTask({taskId, completed: true}))
        } else {
            dispatch(updateTask({taskId, completed: false}))
        }
    };

    const handleChecked = (completed) => {
        return completed ? "task-checked" : "";
    }

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    }
    return (
        <div className="list-tasks">
            {taskList?.map((task) => {
                return (
                    <div key={task.id} className="tasks">
                        <div className="tasks-container">
                            <div className="checkbox-container">
                                <Checkbox
                                    checked={task.completed}
                                    onChange={(event) => handleCheckbox(event, task.id)}
                                />
                            </div>
                            <span className={`task-text ${handleChecked(task.completed)}`}>
                                     {task.title}
                                 </span>
                        </div>
                        <div className="icon-delete" onClick={() => handleDeleteTask(task.id)}>
                            <img src="/assets/trash.svg" alt="trash"/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

