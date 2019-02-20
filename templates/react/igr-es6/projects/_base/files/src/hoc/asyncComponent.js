import React, {Component} from 'react';

// https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
const makeCancelable = (promise) => {
  let hasCanceled_ = false;
  
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
    val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
    error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });
  
  return {
    promise: wrappedPromise,
    cancel() {
    hasCanceled_ = true;
    },
  };
  };

/**
 * https://medium.com/front-end-weekly/loading-components-asynchronously-in-react-app-with-an-hoc-61ca27c4fda7
 * @param {function} importComponent 
 */
const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    }

    componentDidMount() {
      this.op = makeCancelable(importComponent());
      this.op.promise.then(cmp => {
          this.setState({component: cmp.default});
        });
    }

    componentWillUnmount() {
      this.op.cancel();
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props}/> : null;
    }
  }
};

export default asyncComponent;