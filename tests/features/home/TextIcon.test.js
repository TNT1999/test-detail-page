import React from 'react';
import { shallow } from 'enzyme';
import { TextIcon } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TextIcon />);
  expect(renderedComponent.find('.home-text-icon').length).toBe(1);
});
