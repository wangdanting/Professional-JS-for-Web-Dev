import { connect } from "react-redux";
import { setVisibilityFilter } from "../../actions/todomvc";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.mVisibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
