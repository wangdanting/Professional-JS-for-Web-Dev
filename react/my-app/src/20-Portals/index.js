import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

const appRoot = document.getElementById("app-root");
const modalRoot = document.getElementById("modal-root");

function Child() {
  return (
    <div>
      <button>Click</button>
    </div>
  );
}

class Modal extends PureComponent {
  el = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    console.log(this.props.children, "this.props.children");
    console.log(this.el, "this.el");
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Portals extends PureComponent {
  state = {
    clicks: 0
  };

  handleClick = () => {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  };

  render() {
    return (
      // 测试冒泡
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

export default Portals;
