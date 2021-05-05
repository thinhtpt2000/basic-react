import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import selectedTask from "./selectedTask";

const myReducer = combineReducers({
    tasks, // tasks: tasks,
    isDisplayForm,
    selectedTask
});

export default myReducer;