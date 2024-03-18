import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {updateTaskAction } from "../../actions/actions";
import { deleteTaskThunk, getAllTasksThunk } from "../../redux/thunks";

export const TasksList = () => {
    const taskList = useSelector((state) => state.listTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasksThunk);
    }, [])

    const handleCheckbox = (event, taskId) => {
        if (event.target.checked) {
            dispatch(updateTaskAction({taskId, completed: true}))
        } else {
            dispatch(updateTaskAction({taskId, completed: false}))
        }
    };

    const handleChecked = (completed) => {
        return completed ? "task-checked" : "";
    }

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTaskThunk(taskId));
    }

    return (
        <div className="list-tasks">
            {taskList.length && taskList?.map((task) => {
                return (
                    <div key={task.id} className="tasks">
                        <div className="tasks-container">
                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    className="checkbox"
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

