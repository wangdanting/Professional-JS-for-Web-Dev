import { connect } from "react-redux";
import { setVisibilityFilter } from "../../actions/undoTodos";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.uVisibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
