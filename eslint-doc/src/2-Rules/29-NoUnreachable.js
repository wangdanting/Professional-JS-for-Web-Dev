import React from 'react';
function fn() {
	let x;
	x = 1;
	return x;
	//该规则禁止在 return、throw、continue 和 break 语句后出现不可达代码
	//Unreachable code. [no-unreachable]
	x = 3;
}

const NoUnreachable = () => {
	return <div>NoUnreachable</div>;
};

export default NoUnreachable;
