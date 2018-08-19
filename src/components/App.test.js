import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const wrapper = shallow(<App />);

it('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('initialises the `state` with an empty list of gifts', () => {
  expect(wrapper.state('gifts')).toEqual([]);
});
