import React from 'react';

const EslintDisableForSpecificRules = () => {
	/* eslint-disable no-console, no-unused-vars */
	console.log('EslintDisable');
	const abc = '1';
	/* eslint-enable no-console */

	return <div>EslintDisableForSpecificRules</div>;
};

export default EslintDisableForSpecificRules;
