import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const s = Symbol(1);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Greeting extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    array: PropTypes.array,
    func: PropTypes.func,
    num: PropTypes.number,
    obj: PropTypes.object,
    string: PropTypes.string,
    symbol: PropTypes.symbol,
    node: PropTypes.node, // 任何可被渲染的元素（包括数字、字符串、子元素或数组）
    element: PropTypes.element, //一个 React 元素
    point: PropTypes.instanceOf(Point), //你也可以声明属性为某个类的实例
    enum: PropTypes.oneOf(["News", "Photos"]), // 你也可以限制你的属性值是某个特定值之一
    union: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Point)
    ]), // 限制它为列举类型之一的对象
    arrayOf: PropTypes.arrayOf(PropTypes.number), // 一个指定元素类型的数组
    objectOf: PropTypes.objectOf(PropTypes.number), // 一个指定类型的对象
    shape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }), // 一个指定属性及其类型的对象
    // 你也可以在任何 PropTypes 属性后面加上 `isRequired`,
    //后缀，这样如果这个属性父组件没有提供时，会打印警告信息
    required1: PropTypes.number.isRequired,
    requiredAny: PropTypes.any.isRequired, // 任意类型的数据
    // 你也可以指定一个自定义验证器。它应该在验证失败时返回
    // 一个 Error 对象而不是 `console.warn` 或抛出异常。
    // 不过在 `oneOfType` 中它不起作用。
    customProp: function(props, propName, componentName) {
      //props => this.props
      //propName => 'customProp'
      //componentName => 'Greeting'
      if (!/^1\d{10}/.test(props[propName])) {
        return new Error(
          "Invalid prop `" +
            propName +
            "` supplied to" +
            " `" +
            componentName +
            "`. Validation failed."
        );
      }
    },
    // 不过你可以提供一个自定义的 `arrayOf` 或 `objectOf`
    // 验证器，它应该在验证失败时返回一个 Error 对象。 它被用
    // 于验证数组或对象的每个值。验证器前两个参数的第一个是数组
    // 或对象本身，第二个是它们对应的键。
    customArrayProp: function(
      propValue,
      key,
      componentName,
      location,
      propFullName
    ) {
      //propValue => this.props
      //key => 'customArrayProp'
      // componentName => 'Greeting'
      //location => prop
      //propFullName => null
      if (!/\d/.test(propValue[key])) {
        return new Error(
          "Invalid prop `" +
            propFullName +
            "` supplied to" +
            " `" +
            componentName +
            "`. Validation failed."
        );
      }
    }
  };

  static defaultProps = {
    required1: 1,
    requiredAny: 1,
    customProp: 18875082742,
    customArrayProp: 1
  };

  render() {
    return <h1>Hello</h1>;
  }
}

class PropTypess extends PureComponent {
  handleSearch = () => {};

  render() {
    const props = {
      name: "123",
      array: [1],
      func: this.handleSearch,
      num: 3,
      obj: { d: 1 },
      string: "3",
      symbol: s,
      node: <h1>ss</h1>,
      element: <Greeting />,
      point: new Point(1, 2),
      enum: "News",
      union: 1,
      arrayOf: [2],
      objectOf: { e: 2 },
      shape: {
        d: 2,
        color: "blue",
        fontSize: 2
      },
      required1: 2,
      requiredAny: "3",
      customProp: 18875082742,
      customArrayProp: 4
    };
    return <Greeting {...props} />;
  }
}

export default PropTypess;
