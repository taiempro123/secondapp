import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import ItemEditing from "./ItemEditing";

const myReducer = combineReducers({
  tasks, //tasks = tasks
  isDisplayForm,
  ItemEditing,
});

export default myReducer;
