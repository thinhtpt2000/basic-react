import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import selectedTask from "./selectedTask";
import filterTask from "./filterTask";
import searchTask from "./searchTask";

const myReducer = combineReducers({
    tasks, // tasks: tasks,
    isDisplayForm,
    selectedTask,
    filterTask,
    searchTask
});

export default myReducer;