import React from 'react';

const UseIsnan = () => {
	const a = 'p';
	//要求使用 isNaN() 检查 NaN
	// Use the isNaN function to compare with NaN. [use-isnan]
	// if (a == NaN) {
	// 	// empty
	// }
	if (isNaN(a)) {
		// empty
	}
	return <div>UseIsnan</div>;
};

export default UseIsnan;
