import React from 'react';
import { shallow } from 'enzyme';
import { CommentItem } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CommentItem />);
  expect(renderedComponent.find('.home-comment-item').length).toBe(1);
});
