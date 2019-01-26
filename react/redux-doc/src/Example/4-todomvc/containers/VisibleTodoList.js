import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state, ownProps) => {
  return {
    filteredTodos: state.mTodos
  };
};

const VisibleTodoList = connect(mapStateToProps)(TodoList);

export default VisibleTodoList;
