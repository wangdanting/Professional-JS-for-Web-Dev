import React, { PureComponent } from "react";

function createMarkup() {
  return { __html: "First &middot; Second" };
}

class DangerouslySetInnerHTML extends PureComponent {
  render() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
}
export default DangerouslySetInnerHTML;
