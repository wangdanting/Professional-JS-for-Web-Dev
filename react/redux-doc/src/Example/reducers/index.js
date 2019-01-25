import { combineReducers } from "redux";
import counter from "./counter";
import { todos, visibilityFilter } from "./todos";
import { undoableTodos as uTodos } from "./undoTodos";

export default combineReducers({
  counter,
  todos,
  visibilityFilter,
  uTodos
});
