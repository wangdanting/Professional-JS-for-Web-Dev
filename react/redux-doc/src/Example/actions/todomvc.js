import * as types from "../4-todomvc/constants/ActionTypes";

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});
