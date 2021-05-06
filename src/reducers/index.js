import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import selectedTask from "./selectedTask";
import filterTask from "./filterTask";
import searchTask from "./searchTask";
import sortTask from "./sortTask";

const myReducer = combineReducers({
    tasks, // tasks: tasks,
    isDisplayForm,
    selectedTask,
    filterTask,
    searchTask,
    sortTask
});

export default myReducer;