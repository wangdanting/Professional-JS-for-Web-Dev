import React, { PureComponent, Fragment } from "react";

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
};

function PhotoStory(props) {
  return <div>PhotoStory{props.firstName}</div>;
}

function VideoStory() {
  return <div>VideoStory</div>;
}

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function List() {
  return [
    <li key="A">First Item</li>,
    <li key="B">Second Item</li>,
    <li key="C">Third Item</li>
  ];
}

function Repeat(props) {
  const { numTimes } = props;
  let items = [];
  for (let i = 0; i < numTimes; i++) {
    items.push(props.children(i));
  }
  return <Fragment>{items}</Fragment>;
}

class JSXInDepth extends PureComponent {
  render() {
    const SpecificStory = components["photo"];
    const props = { firstName: "Ben", lastName: "Hector" };

    return (
      <Fragment>
        <MyComponents.DatePicker color="red" />
        <SpecificStory {...props} />
        <ul>
          <List />
        </ul>
        <Repeat numTimes={10}>{index => <div key={index}>{index}</div>}</Repeat>
      </Fragment>
    );
  }
}

export default JSXInDepth;
