import React, { PureComponent, Fragment } from "react";

class CustomInput extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleFocus = () => {
    this.myRef.current.focus();
  };

  render() {
    return <input type="text" ref={this.myRef} />;
  }
}

class CustomTextInput extends PureComponent {
  render() {
    const { inputRef } = this.props;
    return <input type="text" ref={inputRef} />;
  }
}

class RefsAndDOM extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.textInput = React.createRef();
    this.textInputRef = null;
    this.customTextRef = null;
  }

  handleFocus = () => {
    this.myRef.current.focus();
  };

  handleFocus1 = () => {
    this.textInput.current.handleFocus();
  };

  setTextInputRef = element => {
    this.textInputRef = element;
  };

  focusTextInput = () => {
    if (this.textInputRef) {
      this.textInputRef.focus();
    }
  };

  setCustomInputRef = element => {
    this.customTextRef = element;
  };

  focusTextInput1 = () => {
    if (this.customTextRef) {
      this.customTextRef.focus();
    }
  };

  render() {
    return (
      <Fragment>
        {/* 为 DOM 元素添加 Ref */}
        <input type="text" ref={this.myRef} />
        <input type="button" value="focus" onClick={this.handleFocus} />
        {/* 为类组件添加 Ref */}
        <CustomInput ref={this.textInput} />
        <input type="button" value="focus2" onClick={this.handleFocus1} />
        {/* 回调 Refs 为 DOM 元素添加 Ref */}
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        {/* 回调 Refs 为类组件添加 Ref */}
        <CustomTextInput inputRef={this.setCustomInputRef} />
        <input type="button" value="focus2" onClick={this.focusTextInput1} />
      </Fragment>
    );
  }
}

export default RefsAndDOM;
