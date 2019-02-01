import React from 'react';
import ReactDOM from 'react-dom';
import $(ClassName) from './index';

// won't run https://github.com/facebook/create-react-app/issues/6020
// TODO: see if template can 

it('$(ClassName) renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<$(ClassName) />, div);
  ReactDOM.unmountComponentAtNode(div);
});
