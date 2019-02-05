import React from 'react';

const NoEmptyCharacterClass = () => {
	//在正则表达式中空字符集不能匹配任何字符，它们可能是打字错误

	//error
	// /^abc[]/.test('abcdefg'); // false
	// 'abcdefg'.match(/^abc[]/); // null

	//true
	/^abc/.test('abcdefg'); // true
	'abcdefg'.match(/^abc/); // ["abc"]

	/^abc[a-z]/.test('abcdefg'); // true
	'abcdefg'.match(/^abc[a-z]/); // ["abcd"]

	return <div>NoEmptyCharacterClass</div>;
};

export default NoEmptyCharacterClass;
