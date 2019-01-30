import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import {
  fetchPostsIfNeeded,
  selectSubreddit,
  invalidateSubreddit
} from "../../actions/async";

class App extends PureComponent {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange = nextSubreddit => {
    const { dispatch } = this.props;
    dispatch(selectSubreddit(nextSubreddit));
  };

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  };

  render() {
    const { selectedSubreddit, lastUpdated, isFetching, posts } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <Fragment>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={["reactjs", "frontend"]}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
        {isEmpty ? (
          isFetching ? (
            <h2>Loading</h2>
          ) : (
            <h2>Empty.</h2>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { async } = state;
  const { selectedSubreddit, postsBySubreddit } = async;
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  };
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
