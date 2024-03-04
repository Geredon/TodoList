import {ADD_MANY_TASKS, ADD_TASK, DELETE_TASK} from "./actionsTypes";
import {getTasks} from "../api/api";

export const putData = (payload) => ({
   type: ADD_MANY_TASKS,
   payload,
});
export const addTaskAction = (payload) => ({
   type: ADD_TASK,
   payload,
});

export const deleteTaskAction = (payload) => ({
   type: DELETE_TASK,
   payload,
})

export const getAllTasks = async (dispatch, getState) => {
   try {
      const data = await getTasks();
      dispatch(putData(data));
   }
   catch (error) {
      console.log(error.message);
   }
}

export const deleteTasks = (taskId) => {
   return function() {
      fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
         method: "DELETE",
      })
          .then(response => {
             if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
             }
          })
          .catch(error => {
             console.error('Error deleting task:', error.message);
          });
   };
}
export const addTask = (title) => {
   return function(dispatch) {
      fetch(`https://jsonplaceholder.typicode.com/todos/`, {
         method: "post",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            title: title,
            completed: false,
         })
      })
          .then((response) => response.json())
          .then(res => dispatch(addTaskAction(res)))
          .catch(error => {
             console.error('Ошибка при добавлении задачи:', error.message);
          });
   };
};
