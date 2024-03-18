import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTaskThunk } from "../../redux/thunks";

export const AddTask = () => {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (inputValue) {
            dispatch(createTaskThunk(inputValue));
            setInputValue("");
        }
    };

    return (
        <div className="add-task">
            <input
                className="input"
                placeholder="Добавить новую задачу"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button className="btn-plus" onClick={handleAddTask}>
                <span className="btn-text">Создать</span>
                <img src="/assets/plus.svg" alt="btn-plus"/>
            </button>
        </div>
    )
};
