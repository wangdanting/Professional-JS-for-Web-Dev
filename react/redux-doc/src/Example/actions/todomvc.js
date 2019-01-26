import * as types from "../4-todomvc/constants/ActionTypes";

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS });
