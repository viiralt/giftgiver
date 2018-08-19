import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { Button } from '../elements';

const wrapper = shallow(<App />);

it('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('initialises the `state` with an empty list of gifts', () => {
  expect(wrapper.state('gifts')).toEqual([]);
});

it('adds new gift to the `state` when clicking the `add gift` button', () => {
  wrapper.find(Button).simulate('click');
  expect(wrapper.state('gifts')).toEqual([{ id: 1 }]);
});
