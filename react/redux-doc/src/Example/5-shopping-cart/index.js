import React from "react";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";

const ShoppingCart = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default ShoppingCart;
