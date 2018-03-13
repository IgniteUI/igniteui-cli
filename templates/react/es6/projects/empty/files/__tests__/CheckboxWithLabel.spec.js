//Illustrative test sample using enzyme shallow.

import React from 'react';
import Enzyme from "enzyme"; 
import CheckboxWithLabel from './CheckboxWithLabel';

import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = Enzyme.shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});