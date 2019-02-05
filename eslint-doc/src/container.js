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
	NoConsole,
	NoConstantCondition,
	NoControlRegex,
	NoDebugger,
	NoDupeArgs,
	NoDupeKeys,
	NoDuplicateCase,
	NoEmpty,
	NoEmptyCharacterClass,
	NoExAssign,
	NoExtraBooleanCast,
	NoExtraParens,
	NoExtraSemi,
	NoFuncAssign,
	NoInnerDeclarations,
	NoInvalidRegexp,
	NoIrregularWhiteSpace,
	NoObjCalls,
	NoPrototypeBuiltins,
	NoRegexSpaces,
	NoSparseArrays,
	NoTemplateCurly,
	NoUnexpectedMultiline,
	NoUnreachable,
	NoUnsafeFinally,
	NoUnsafeNegation,
	UseIsnan
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
		<NoConstantCondition />
		<NoControlRegex />
		<NoDebugger />
		<NoDupeArgs />
		<NoDupeKeys />
		<NoDuplicateCase />
		<NoEmpty />
		<NoEmptyCharacterClass />
		<NoExAssign />
		<NoExtraBooleanCast />
		<NoExtraParens />
		<NoExtraSemi />
		<NoFuncAssign />
		<NoInnerDeclarations />
		<NoInvalidRegexp />
		<NoIrregularWhiteSpace />
		<NoObjCalls />
		<NoPrototypeBuiltins />
		<NoRegexSpaces />
		<NoSparseArrays />
		<NoTemplateCurly />
		<NoUnexpectedMultiline />
		<NoUnreachable />
		<NoUnsafeFinally />
		<NoUnsafeNegation />
		<UseIsnan />
	</Fragment>
);

export default Container;
