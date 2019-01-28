import { combineReducers } from "redux";
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART
} from "../5-shopping-cart/constants/ActionTypes";

const initialState = {
  addedIds: [],
  quantityById: {}
};

const setProduct = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: setProduct(state[productId], action)
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    default:
      return state;
  }
};

export const products = combineReducers({
  byId,
  visibleIds
});

const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));

// ------------------------------------------cart----------------------------------------------

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      console.log(state, "state");
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      };
    default:
      return state;
  }
};

export const cart = combineReducers({
  addedIds,
  quantityById
});

export const getAddedIds = state => state.addedIds;
export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getTotal = state => {
  return getAddedIds(state.cart)
    .reduce(
      (total, id) =>
        total +
        getProduct(state.products, id).price * getQuantity(state.cart, id),
      0
    )
    .toFixed(2);
};

export const getCartProducts = state => {
  console.log(state, "state");
  return getAddedIds(state.cart).map(id => ({
    ...getProduct(state.products, id),
    quantity: getQuantity(state.cart, id)
  }));
};
