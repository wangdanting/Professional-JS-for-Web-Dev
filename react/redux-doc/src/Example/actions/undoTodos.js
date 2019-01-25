let nextUTodoId = 0;
export const addUTodos = text => ({
  type: "ADD_UTODOS",
  id: nextUTodoId++,
  text
});

export const toggleUTodo = id => {
  console.log(id, "id1");
  return {
    type: "TOGGLE_UTODO",
    id
  };
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
