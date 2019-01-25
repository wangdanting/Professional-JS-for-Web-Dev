import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleUTodo } from "../../actions/undoTodos";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    uTodos: getVisibleTodos(state.uTodos.present, state.uVisibilityFilter)
  };
};

const mapDispatchToProps = {
  onUTodoClick: id => toggleUTodo(id)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
