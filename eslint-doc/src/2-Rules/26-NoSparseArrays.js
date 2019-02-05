import React from 'react';

const NoSparseArrays = () => {
	//该规则禁止使用稀疏数组，也就是逗号之前没有任何元素的数组。该规则不适用于紧随最后一个元素的拖尾逗号的情况。
	//Unexpected comma in middle of array. [no-sparse-arrays]
	// var items = [,];
	// var colors = ['red', , 'blue'];

	var items = [];
	var items = new Array(23);
	var colors = ['red', 'blue'];
	return <div>NoSparseArrays</div>;
};

export default NoSparseArrays;
