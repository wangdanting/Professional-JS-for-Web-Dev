import React from 'react';

const NoTemplateCurly = () => {
	//Unexpected template string expression. [no-template-curly-in-string]
	// const a = 'Hello ${name}!';
	const name = 123;
	const a = `Hello ${name}!`;
	return <div>NoTemplateCurly{a}</div>;
};

export default NoTemplateCurly;
