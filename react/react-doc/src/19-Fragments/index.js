import React, { PureComponent, Fragment } from "react";

const list = [{ id: "apple", title: "苹果" }, { id: "bnana", title: "香蕉" }];

class ListItem extends PureComponent {
  handleClick = () => {
    this.props.handleClick(this.props.id);
  };
  render() {
    const { title } = this.props;
    return <li onClick={this.handleClick}>{title}</li>;
  }
}

class List extends PureComponent {
  handleClick = id => {
    console.log(id, "id");
  };

  render() {
    const { list } = this.props;
    const listFrag = list.map(item => {
      const { id, title } = item;
      return (
        <ListItem
          key={id}
          id={id}
          title={title}
          handleClick={this.handleClick}
        />
      );
    });

    return <Fragment>{listFrag}</Fragment>;
  }
}

class Fragments extends PureComponent {
  render() {
    return (
      <ul>
        <List list={list} />
      </ul>
    );
  }
}

export default Fragments;
