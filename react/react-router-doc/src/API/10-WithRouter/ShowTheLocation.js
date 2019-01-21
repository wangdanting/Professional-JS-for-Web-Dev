import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ShowTheLocation extends PureComponent {
  render() {
    const { match, location, history } = this.props;
    return <div>You are now at {location.pathname}</div>;
  }
}

export default withRouter(ShowTheLocation);
