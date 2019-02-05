import React from 'react';

//如果在一个函数定义中出现多个同名的参数，后面出现的会覆盖前面出现的参数。重复的名称可能是一个打字错误。
//Parsing error: Argument name clash in strict mode
// const fun = (a, b, a) => {
// 	return 1;
// };

const NoDupeArgs = () => {
	return <div>NoDupeArgs</div>;
};

export default NoDupeArgs;
