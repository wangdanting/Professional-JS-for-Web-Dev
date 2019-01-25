import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleUTodo } from "../../actions/undoTodos";

const mapStateToProps = (state, ownProps) => {
  return {
    uTodos: state.uTodos.present
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUTodoClick: id => {
      return dispatch(toggleUTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
