import generateTree from "../6-tree-view/generateTree";
import {
  INCREMENT,
  DELETE_NODE,
  REMOVE_CHILD,
  CREATE_NODE,
  ADD_CHILD
} from "../6-tree-view/constants/TreeTypes";

const initialState = generateTree();

const childIds = (state, action) => {
  switch (action.type) {
    case ADD_CHILD:
      return [...state, action.childId];
    case REMOVE_CHILD:
      return state.filter(id => id !== action.childId);
    default:
      return state;
  }
};

const node = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case CREATE_NODE:
      return { id: action.nodeId, counter: 0, childIds: [] };
    case ADD_CHILD:
    case REMOVE_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, action)
      };
    default:
      return state;
  }
};

const getAllDescendantIds = (state, nodeId) =>
  state[nodeId].childIds.reduce(
    (acc, childId) => [...acc, childId, ...getAllDescendantIds(state, childId)],
    []
  );

const deleteMany = (state, ids) => {
  state = { ...state };
  ids.forEach(id => delete state[id]);
  return state;
};

const tree = (state = initialState, action) => {
  const { nodeId } = action;
  if (typeof nodeId === undefined) {
    return state;
  }
  if (action.type === DELETE_NODE) {
    const descendantIds = getAllDescendantIds(state, nodeId);
    return deleteMany(state, [nodeId, ...descendantIds]);
  }
  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  };
};

export default tree;
