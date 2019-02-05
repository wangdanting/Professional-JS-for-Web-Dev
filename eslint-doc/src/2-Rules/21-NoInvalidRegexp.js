import React from 'react';

const NoInvalidRegexp = () => {
	// 该规则禁止在 RegExp 构造函数中出现无效的正则表达式
	// Invalid regular expression: /[/: Unterminated character class. [no-invalid-regexp]
	// RegExp('[');
	// RegExp('.', 'z')
	// new RegExp('\\');

	new RegExp('.', 'yu');
	new RegExp('.', 'y');
	RegExp('.');
	new RegExp();
	// this.RegExp('[');
	return <div>NoInvalidRegexp</div>;
};

export default NoInvalidRegexp;
