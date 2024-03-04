import React, {useMemo} from 'react';
import {useSelector} from "react-redux";

export const InfoTasks = () => {
    const taskList = useSelector((state) => state.listTasks);

    const taskCompleted = useMemo (() => {
        return taskList.reduce((acc, item) => {
            if( item?.completed) {
                return ++acc;
            } else {
                return acc
            }
        }, 0)
    }, [taskList]);

    return (
        <div className="container-info-tasks">
            <div className="info-task">
                <span className="info-text">Созданные задачи</span>
                <div className="counter">{taskList.length ?? 0}</div>
            </div>
            <div className="info-task">
                <span className="info-text">Завершенные</span>
                <span className="counter">{taskCompleted} из {taskList.length}</span>
            </div>
        </div>
    );
};
