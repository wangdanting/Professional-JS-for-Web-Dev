import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function ABC(props) {
  console.log(props, "props"); //{}
  return <div>abc</div>;
}

function Routers() {
  return (
    <Router>
      <ABC />
    </Router>
  );
}
export default Routers;
