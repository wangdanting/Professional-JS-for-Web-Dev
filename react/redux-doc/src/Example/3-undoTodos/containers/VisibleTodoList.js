import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleUTodo } from "../../actions/undoTodos";

const mapStateToProps = (state, ownProps) => {
  console.log(state, "state");
  return {
    uTodos: state.uTodos.present
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUTodoClick: toggleUTodo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
