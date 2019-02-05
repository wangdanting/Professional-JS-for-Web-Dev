import React from 'react';

const NoObjCalls = () => {
	//该规则禁止将 Math、JSON 和 Reflect 对象当作函数进行调用
	//[eslint] 'Math' is not a function. [no-obj-calls]
	// var math = Math();
	var math = Math.PI;
	return <div>NoObjCalls{math}</div>;
};

export default NoObjCalls;
