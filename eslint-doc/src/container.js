import React, { Fragment } from 'react';
import {
	EslintDisable,
	EslintDisableForSpecificRules,
	EslintDisableInEntireFile,
	EslintDisableForSpecificRulesInEntireFile,
	EslintDisableRulesOnASpecificLine
} from './1-DisablingRulesWithInlineComments';

import {
	ForDirection,
	GetterReturn,
	NoAwaitInLoop,
	NoCompareNegZero
} from './2-Rules';
const Container = () => (
	<Fragment>
		<EslintDisable />
		<EslintDisableForSpecificRules />
		<EslintDisableInEntireFile />
		<EslintDisableForSpecificRulesInEntireFile />
		<EslintDisableRulesOnASpecificLine />
		<ForDirection />
		<GetterReturn />
		<NoAwaitInLoop />
		<NoCompareNegZero />
	</Fragment>
);

export default Container;
