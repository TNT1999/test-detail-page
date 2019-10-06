import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Tag />);
  expect(renderedComponent.find('.home-tag').length).toBe(1);
});
