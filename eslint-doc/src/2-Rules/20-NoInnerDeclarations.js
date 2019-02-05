import React from 'react';

function anotherThing() {
	var fn;

	if (test) {
		// Good
		fn = function expression() {};

		// Bad
		// function declaration() {}
	}
}

const NoInnerDeclarations = () => {
	//该规则要求函数声明和变量声明（可选的）在程序或函数体的顶部
	// /[eslint] Move function declaration to function body root. [no-inner-declarations]
	// if (test) {
	//   function doSomethingElse() {}
	// }

	let a = 0;

	// Good
	if (a === 1) {
		let bar1 = 0;
	}

	// Bad
	// while (test) {
	// 	var bar2;
	// }

	return <div>NoInnerDeclarations</div>;
};

export default NoInnerDeclarations;
