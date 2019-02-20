import React from 'react';
import $(ClassName) from './index';
import { shallow } from 'enzyme';

it('$(ClassName) renders without crashing', () => {
	const wrapperComponent = shallow(<$(ClassName) />);
	expect(wrapperComponent).toBeDefined();
	expect(wrapperComponent).toBeTruthy();
});