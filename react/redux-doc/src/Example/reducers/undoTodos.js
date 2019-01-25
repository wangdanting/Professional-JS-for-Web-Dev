import undoable, { includeAction } from "redux-undo";

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_UTODOS":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_UTODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const uTodos = (state = [], action) => {
  switch (action.type) {
    case "ADD_UTODOS":
      return [...state, todo(undefined, action)];
    case "TOGGLE_UTODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export const uVisibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_UVISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

// export const undoableTodos = undoable(uTodos, {
//   filter: includeAction(["ADD_UTODOS", "TOGGLE_UTODO"])
// });

export const undoableTodos = undoable(uTodos);
