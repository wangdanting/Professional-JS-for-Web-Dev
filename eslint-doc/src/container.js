import React, { Fragment } from 'react';
import {
	EslintDisable,
	EslintDisableForSpecificRules,
	EslintDisableInEntireFile,
	EslintDisableForSpecificRulesInEntireFile
} from './1-DisablingRulesWithInlineComments';

const Container = () => (
	<Fragment>
		<EslintDisable />
		<EslintDisableForSpecificRules />
		<EslintDisableInEntireFile />
		<EslintDisableForSpecificRulesInEntireFile />
	</Fragment>
);

export default Container;
