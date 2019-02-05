import React from 'react';

const doSomething = () => {};

const NoEmpty = () => {
	const foo = false;
	//该规则禁止空语句块出现
	//[eslint] Empty block statement. [no-empty]
	// if (foo) {
	// }

	// while (foo) {}

	// switch (foo) {
	// }

	// try {
	// } catch (ex) {
	// } finally {
	// }

	//true

	if (foo) {
		// empty
	}

	while (foo) {
		/* empty */
	}

	try {
		doSomething();
	} catch (ex) {}

	try {
		doSomething();
	} finally {
		/* continue regardless of error */
	}

	return <div>NoEmpty</div>;
};

export default NoEmpty;
