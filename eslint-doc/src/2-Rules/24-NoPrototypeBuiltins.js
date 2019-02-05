import React from 'react';

const NoPrototypeBuiltins = () => {
	var foo = {};
	//该规则禁止直接在对象实例上调用 Object.prototype 的一些方法
	// var hasBarProperty = foo.hasOwnProperty('bar');
	var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, 'bar');
	return <div>NoPrototypeBuiltins</div>;
};

export default NoPrototypeBuiltins;
