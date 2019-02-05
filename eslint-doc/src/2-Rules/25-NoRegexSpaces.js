import React from 'react';

const NoRegexSpaces = () => {
	//该规则禁止在正则表达式字面量中出现多个空格
	//Spaces are hard to count. Use {3}. [no-regex-spaces]
	// var re = /foo   bar/;
	var re = /foo {3}bar/;
	var re1 = new RegExp('foo {3}bar');
	return <div>NoRegexSpaces</div>;
};

export default NoRegexSpaces;
