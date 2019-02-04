import React from 'react';

const NoCompareNegZero = () => {
	const x = -0;
	let abc = 1;

	//Do not use the '===' operator to compare against -0. [no-compare-neg-zero]
	// if (x === -0) {
	// 	abc = abc + 1;
	// }

	if (x === 0) {
		abc = abc + 1;
	}

	if (Object.is(x, -0)) {
		abc = abc + 1;
	}

	return <div>NoCompareNegZero{abc}</div>;
};

export default NoCompareNegZero;
