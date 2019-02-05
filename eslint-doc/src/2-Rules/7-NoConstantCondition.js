import React from 'react';

let value = 0;

const doSomeThing = () => {
	value = value + 1;
};

const NoConstantCondition = () => {
	//error
	// if (false) {
	// 	doSomeThing();
	// }

	//right
	// if (value === 0) {
	// 	doSomeThing();
	// }

	//right
	// while (true) {
	//   doSomething();
	//   if (condition()) {
	//     break;
	//   }
	// }

	//error
	// for (; -2; ) {
	// 	doSomethingForever();
	// }

	//right
	// for (;;) {
	// 	doSomethingForever();
	// }

	//right
	// for (; true; ) {
	// 	doSomething();
	// 	if (condition()) {
	// 		break;
	// 	}
	// }

	//error
	// while (typeof x) {
	// 	doSomethingForever();
	// }

	//right
	// while (typeof x === 'undefined') {
	// 	doSomething();
	// }

	//error
	// do {
	// 	doSomethingForever();
	// } while ((x = -1));

	//right
	// do {
	// 	doSomething();
	// } while (x);

	//right
	// do {
	// 	doSomething();
	// 	if (condition()) {
	// 		break;
	// 	}
	// } while (true);

	//error
	// var result = 0 ? a : b;

	//right
	// var result = x !== 0 ? a : b;

	return <div>NoConstantCondition</div>;
};

export default NoConstantCondition;
