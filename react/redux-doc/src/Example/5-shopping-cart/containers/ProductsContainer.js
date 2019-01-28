import React from "react";
import { connect } from "react-redux";
import { getVisibleProducts } from "../../reducers/shoppingCart";
import ProductsList from "../components/ProductsList";
import ProductItem from "../components/ProductItem";
import { addToCart } from "../../actions/shoppingCart";

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
      />
    ))}
  </ProductsList>
);

const mapStateToProps = (state, ownProps) => {
  return {
    products: getVisibleProducts(state.products)
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer);
