import React from 'react';

const NoControlRegex = () => {
	//Unexpected control character(s) in regular expression: \x1f. [no-control-regex]
	// var pattern1 = /\x1f/;
	// var pattern2 = new RegExp("\x1f");

	var pattern1 = /\x20/;
	var pattern2 = new RegExp('\x20');

	return <div>NoControlRegex</div>;
};

export default NoControlRegex;
