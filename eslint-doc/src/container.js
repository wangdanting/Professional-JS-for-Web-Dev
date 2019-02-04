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
	NoCompareNegZero,
	NoCondAssign,
	NoConsole
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
		<NoCondAssign />
		<NoConsole />
	</Fragment>
);

export default Container;
