import React, { PureComponent } from "react";

const user = {
  firstName: "Wang",
  lastName: "DanTing",
  gender: "girl"
};

const className = "abc";

class IntroduceJsx extends PureComponent {
  formatName(user) {
    const { firstName, lastName } = user;
    return `${firstName}${lastName}`;
  }

  //可以在 if 或者 for 语句里使用 JSX
  getGender(user) {
    const { gender } = user;
    if (gender === "girl") {
      return <span>beautiful</span>;
    } else {
      return <span>hansome</span>;
    }
  }

  render() {
    const element = (
      <h1 tabIndex="0" className={className}>
        hello world! {this.formatName(user)} is so {this.getGender(user)}
      </h1>
    );
    return element;
  }
}
export default IntroduceJsx;
