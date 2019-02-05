import React from 'react';

const NoExAssign = () => {
	//如果意外地（或故意地）给异常参数赋值，是不可能引用那个位置的错误的。由于没有 arguments 对象提供额外的方式访问这个异常，对它进行赋值绝对是毁灭性的。
	//[eslint] Do not assign to the exception parameter. [no-ex-assign]
	// try {
	// 	// code
	// } catch (e) {
	// 	e = 10;
	// }

	let foo = 123;
	try {
		// code
	} catch (e) {
		foo = 10;
	}
	return <div>NoExAssign{foo}</div>;
};

export default NoExAssign;
