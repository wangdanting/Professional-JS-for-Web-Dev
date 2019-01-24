import { connect } from "react-redux";
import { toggleTodo } from "../../actions/todos";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => {
    console.log(id, "id");
    return dispatch(toggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
