import { combineReducers } from "redux";
import counter from "./counter";
import { todos, visibilityFilter } from "./todos";
import { undoableTodos as uTodos, uVisibilityFilter } from "./undoTodos";
import {
  todos as mTodos,
  visibilityFilter as mVisibilityFilter
} from "./todomvc";
import { products } from "./shoppingCart";

export default combineReducers({
  counter,
  todos,
  visibilityFilter,
  uTodos,
  uVisibilityFilter,
  mTodos,
  mVisibilityFilter,
  products
});
