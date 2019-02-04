import React from 'react';

const NoConsole = () => {
	const a = 0;

	//[eslint] Unexpected console statement. [no-console]
	console.log(a, 'a');
	console.warn('测试，测试，测试');
	console.error('测试，测试，测试');

	return <div>NoConsole</div>;
};

export default NoConsole;
