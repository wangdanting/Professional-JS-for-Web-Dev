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
      console.log("xx");
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
      console.log("xx1");
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

// export const uVisibilityFilter = (state)

export const undoableTodos = undoable(uTodos);
