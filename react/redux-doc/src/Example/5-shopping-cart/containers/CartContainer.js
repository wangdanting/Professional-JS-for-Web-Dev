import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCartProducts, getTotal } from "../../reducers/shoppingCart";
import Cart from "../components/Cart";
import { checkout } from "../../actions/shoppingCart";

const CartContainer = ({ products, total, checkout }) => {
  console.log(products);
  return (
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getCartProducts(state),
    total: getTotal(state)
  };
};

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer);
