import React from 'react';

const NoCondAssign = () => {
	const abc = 10;
	let def = 0;

	//[eslint] Unexpected constant condition. [no-constant-condition]
	// if (abc = 10) {
	// 	def = def + 1;
	// }

	// do {
	// 	def = def + 1;
	// } while (abc = 10);

	// do {
	// 	def = def + 1;
	// } while ((abc = 10));

	if (abc === 10) {
		def = def + 1;
	}

	do {
		def = def + 1;
	} while (def < 3);

	return <div>NoCondAssign{def}</div>;
};

export default NoCondAssign;
