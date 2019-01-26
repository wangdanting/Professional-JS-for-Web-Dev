import { ADD_TODO } from "../4-todomvc/constants/ActionTypes";

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
    default:
      return state;
  }
};
