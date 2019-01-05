import React, { PureComponent } from "react";

function AuthorInfo(props) {
  return (
    <div className="UserInfo">
      <img
        className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

class Extracting extends PureComponent {
  render() {
    const { text, date, author } = this.props;
    return (
      <div className="Comment">
        <AuthorInfo author={author} />
        <div className="Comment-text">{text}</div>
        <div className="Comment-date">{date}</div>
      </div>
    );
  }
}

export default Extracting;
