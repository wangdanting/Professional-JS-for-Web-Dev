import React from 'react';
import { AST_Object } from 'terser';

const GetterReturn = () => {
	//强制在 getter 属性中出现一个 return 语句 (getter-return)
	//Expected to return a value in getter 'name'. [getter-return]
	// const obj = {
	//   get name() {}
	// };

	// Object.defineProperty(obj, 'age', {
	// 	get: () => {}
	// });

	// class Obj {
	// 	get age() {}
	// }

	const obj = {
		get name() {
			return '123';
		}
	};

	Object.defineProperty(obj, 'age', {
		get: () => {
			return 23;
		}
	});

	class Obj {
		get age() {
			return 34;
		}
	}

	return (
		<div>
      GetterReturn{obj.name}
			{obj.age}
			{Obj.age}
		</div>
	);
};

export default GetterReturn;
