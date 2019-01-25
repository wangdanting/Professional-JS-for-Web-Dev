import React from "react";
import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);

const mapStateToProps = (state, ownProps) => {
  console.log(state.uTodos, "uTodos");
  return {
    canUndo: state.uTodos.past.length > 0,
    canRedo: state.uTodos.future.length > 0
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
  };
};

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);

export default UndoRedo;
