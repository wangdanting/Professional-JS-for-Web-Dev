import React from 'react';

const NoUnsafeNegation = () => {
	const obj = {
		a: 1,
		b: 2
	};
	const a = 'a';
	//该规则禁止对关系运算符的左操作数使用否定操作符
	//Unexpected negating the left operand of 'in' operator. [no-unsafe-negation]
	// if (!a in obj) {
	// 	return 1;
	// }

	// if (!a instanceof 'string') {
	// 	return 1;
	// }

	if (!(a in obj)) {
		return 1;
	}

	if (!(obj instanceof Object)) {
		return 1;
	}
	return <div>NoUnsafeNegation</div>;
};

export default NoUnsafeNegation;
