import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProductsList = ({ title, children }) => (
  <Fragment>
    <h3>{title}</h3>
    {children}
  </Fragment>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default ProductsList;
