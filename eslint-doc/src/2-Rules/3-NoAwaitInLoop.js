import React, { PureComponent } from 'react';

class NoAwaitInLoop extends PureComponent {
  state = {
  	obj: {
  		a: '1',
  		b: '2'
  	},
  	str: ''
  };

  componentDidMount() {
  	this.foo(this.state.obj);
  }

  bar = item => {
  	const { obj } = this.state;
  	return new Promise((resolve, reject) => {
  		setTimeout(() => {
  			return resolve(obj[item]);
  		}, 3000);
  	});
  };

  baz = arr => {
  	this.setState({
  		str: arr.join()
  	});
  };

  // foo = async things => {
  //   const results = [];
  //   for (const thing in things) {
  //     // Bad: each loop iteration is delayed until the entire asynchronous operation completes
  //     results.push(await this.bar(thing));
  //   }
  //   return this.baz(results);
  // };

  async foo(things) {
  	const results = [];

  	for (const thing in things) {
  		// Good: all asynchronous operations are immediately started.
  		results.push(this.bar(thing));
  	}
  	// Now that all the asynchronous operations are running, here we wait until they all complete.
  	this.baz(await Promise.all(results));
  }

  render() {
  	return <div>NoAwaitInLoop{this.state.str}</div>;
  }
}

export default NoAwaitInLoop;
