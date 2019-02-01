import React from 'react';
import ReactDOM from 'react-dom';
import $(ClassName) from './index';

it('$(ClassName) renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<$(ClassName) />, div);
  ReactDOM.unmountComponentAtNode(div);
});
