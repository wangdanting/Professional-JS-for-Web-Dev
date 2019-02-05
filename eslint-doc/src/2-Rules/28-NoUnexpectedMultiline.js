import React from 'react';

const NoUnexpectedMultiline = () => {
	//该规则禁止使用令人困惑的多行表达式。
	//[eslint] Unexpected newline between object and [ of property access. [no-unexpected-multiline]
	// var hello = 'world'
	// [(1, 2, 3)].forEach(() => {
	// 	return 32;
	// });

	var hello = 'world';
	[(1, 2, 3)].forEach(() => {
		return 32;
	});
	return <div>NoUnexpectedMultiline{hello}</div>;
};

export default NoUnexpectedMultiline;
