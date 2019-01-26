import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../../actions/todomvc";
import MainSection from "../components/MainSection";
import { getCompletedTodoCount } from "../selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    todosCount: state.mTodos.length,
    completedCount: getCompletedTodoCount(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
