import React from 'react';
function foo() {
	return 12;
}
var bar = function() {
	return 33;
};
const NoFuncAssign = () => {
	//该规则禁止对 function 声明重新赋值
	// [eslint] 'foo' is a function. [no-func-assign]
	// foo = 123;

	//true
	bar = 23;

	return (
		<div>
      NoFuncAssign{foo}
			{bar}
		</div>
	);
};

export default NoFuncAssign;
