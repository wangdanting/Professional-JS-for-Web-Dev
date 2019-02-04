import React from 'react';

const ForDirection = () => {
	let a = 0;

	//强制 “for” 循环中更新子句的计数器朝着正确的方向移动
	//The update clause in this loop moves the variable in the wrong direction. [for-direction]
	// for (var i = 0; i < 10; i--) {
	//   a = a + i;
	// }

	for (var i = 0; i < 10; i++) {
		a = a + i;
	}

	return <div>ForDirection{a}</div>;
};

export default ForDirection;
