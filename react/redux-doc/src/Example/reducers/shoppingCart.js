import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const products = combineReducers({
  byId,
  visibleIds
});

const getProduct = (state, id) => state.byId(id);

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
