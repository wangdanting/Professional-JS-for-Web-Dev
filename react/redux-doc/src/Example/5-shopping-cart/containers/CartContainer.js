import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCartProducts, getTotal } from "../../reducers/shoppingCart";
import Cart from "../components/Cart";

const CartContainer = ({ products, total }) => {
  console.log(products);
  return <Cart products={products} total={total} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getCartProducts(state),
    total: getTotal(state)
  };
};

export default connect(mapStateToProps)(CartContainer);
