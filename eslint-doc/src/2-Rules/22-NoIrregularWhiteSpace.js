import React from 'react';

function thing(/*<NBSP>*/) {
	return ' <NBSP>123';
}

const NoIrregularWhiteSpace = () => {
	return <div>NoIrregularWhiteSpace{thing}</div>;
};

export default NoIrregularWhiteSpace;
