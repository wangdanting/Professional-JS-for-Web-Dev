import React from "react";

const NoExtraBooleanCast = () => {
  var foo = 123;
  var bar = 123;
  // [eslint] Redundant double negation. [no-extra-boolean-cast]
  //在上下文中比如 if 语句的测试表达式的结果已经被强制转化成了一个布尔值，再通过双重否定（!!）或 Boolean 转化是不必要的
  // if (!!foo) {
  // 	// ...
  // }

  //   if (Boolean(foo)) {
  //     // ...
  // }

  // var foo = !!!bar;
  // var foo = !!bar ? baz : bat;
  // var foo = Boolean(!!bar);
  // var foo = new Boolean(!!bar);

  return (
    <div>
      NoExtraBooleanCast{foo}
      {bar}
    </div>
  );
};

export default NoExtraBooleanCast;
