import React from 'react';

const EslintDisableRulesOnASpecificLine = () => {
  console.log("EslintDisable"); // eslint-disable-line

	// eslint-disable-next-line
  const abc = "1";

	/* eslint-disable-next-line */
  console.log("EslintDisable");

  console.log("EslintDisable"); /* eslint-disable-line */

	console.log('EslintDisable'); /* eslint-disable-line no-console */

	/* eslint-disable-next-line no-unused-vars */
	const abcd = '1';

	return <div>EslintDisableRulesOnASpecificLine</div>;
};

export default EslintDisableRulesOnASpecificLine;
