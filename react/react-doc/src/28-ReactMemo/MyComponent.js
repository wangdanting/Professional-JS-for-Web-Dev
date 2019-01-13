import React from "react";

function MyFun(props) {
  return <p>It is {props.name}</p>;
}

function areEqual(prevProps, nextProps) {
  console.log(prevProps, "prevProps"); //{name: "a"} "prevProps"
  console.log(nextProps, "nextProps"); //{name: "b"} "nextProps"
  return true; //true则不重新渲染， 相反则重新渲染
}

const MyComponent = React.memo(MyFun, areEqual);

export default MyComponent;
