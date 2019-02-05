import React from 'react';

const NoDupeKeys = () => {
	//在你的应用程序中，如果对象字面量中出现多个属性有同样的键可能会到导致意想不到的情况出现。
	//[eslint] Duplicate key 'bar'. [no-dupe-keys]
	// var foo = {
	// 	bar: 'baz',
	// 	bar: 'qux'
	// };

	// var foo = {
	//   0x1: "baz",
	//   1: "qux"
	// };

	return <div>NoDupeKeys</div>;
};

export default NoDupeKeys;
