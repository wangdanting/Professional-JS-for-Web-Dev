import React from 'react';

const NoUnsafeFinally = () => {
	// let foo = function() {
	// 	try {
	// 		return 1;
	// 	} catch (err) {
	// 		return 2;
	// 	} finally {
	// 		//该规则禁止在 finally 语句块中出现 return、throw、break 和 continue 语句。它允许间接使用，比如在 function 或 class 的定义中
	// 		//Unsafe usage of ReturnStatement. [no-unsafe-finally]
	// 		return 3;
	// 	}
	// };

	return <div>NoUnsafeFinally</div>;
};

export default NoUnsafeFinally;
