import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/treeView";

class Node extends PureComponent {
  handleIncrementClick = () => {
    const { increment, id } = this.props;
    increment(id);
  };

  handleRemoveClick = e => {
    e.preventDefault();
    const { removeChild, deleteNode, parentId, id } = this.props;
    removeChild(parentId, id);
    deleteNode(id);
  };

  handleAddChildClick = e => {
    e.preventDefault();
    const { addChild, id, createNode } = this.props;
    const childId = createNode().nodeId;
    addChild(id, childId);
  };

  render() {
    const { id, counter, parentId, childIds = [] } = this.props;
    const list = childIds.map(childId => {
      return (
        <li key={childId}>
          <ConnectedNode id={childId} parentId={id} />
        </li>
      );
    });
    return (
      <Fragment>
        Counter: {counter}
        <button onClick={this.handleIncrementClick}>+</button>
        {typeof parentId !== "undefined" && (
          <a
            href="#"
            onClick={this.handleRemoveClick}
            style={{ color: "lightgray", textDecoration: "none" }}
          >
            ×
          </a>
        )}
        <ul>
          {list}
          <li key="add">
            <a href="#" onClick={this.handleAddChildClick}>
              Add child
            </a>
          </li>
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { tree } = state;
  return tree[ownProps.id];
};

const ConnectedNode = connect(
  mapStateToProps,
  actions
)(Node);

export default ConnectedNode;
