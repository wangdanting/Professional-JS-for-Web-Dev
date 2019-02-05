import React from 'react';

const bar = () => {
	return 1;
};

let i = 0;

const r = () => (i = 9);

const NoExtraParens = () => {
	var a = 1,
		b = 2,
		c = 3;

	//默认选项 "all" 的 错误 代码示例：
	// var a = (b * c);
	// var a = (a * b) + c;
	// typeof (a);
	// (function(){} ? a() : b());
	// for (a in (b, c));
	// for (a in (b));
	// for (a of (b));

	// 默认选项 "all" 的 正确 代码示例
	// (0).toString();
	// Object.prototype.toString.call();
	// ({}.toString.call());
	// // (function() {} ? a() : b());
	// /^a$/.test(a);
	// for (a of (b, c));
	// for (a of b);
	// for (a in (b, c));
	// for (a in b);

	//true
	// while ((a = bar())) {
	// 	//empty
	// }
	// if ((a = bar())) {
	// 	//empty
	// }

	// do;
	// while ((b = bar()));

	// for (; (a = b); );

	// function d(b) {
	// 	return (b = 1);
	// }

	// function e(b) {
	// 	return b ? (c = d) : (c = e);
	// }

	// var m = (a * b) / c;

	return <div>NoExtraParens</div>;
};

export default NoExtraParens;
