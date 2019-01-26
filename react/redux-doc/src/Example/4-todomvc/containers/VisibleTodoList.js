import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoList from "../components/TodoList";
import * as TodoActions from "../../actions/todomvc";
import { getVisibleTodos } from "../selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    filteredTodos: getVisibleTodos(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
