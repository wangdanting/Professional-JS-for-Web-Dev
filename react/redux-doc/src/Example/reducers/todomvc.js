import {
  ADD_TODO,
  COMPLETE_ALL_TODOS,
  COMPLETE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
  SET_VISIBILITY_FILTER
} from "../4-todomvc/constants/ActionTypes";

import { SHOW_ALL } from "../4-todomvc/constants/TodoFilters";

const initialState = [
  {
    text: "Use Redux",
    completed: false,
    id: 0
  }
];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];
    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
};

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
