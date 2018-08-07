import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { Button, GiftList } from '../elements';

const wrapper = shallow(<App />);

it('should render the <App /> correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('initialises `state` with an empty list of gifts', () => {
  // App.state.gifts
  expect(wrapper.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  // assume `add gift` button has been pressed
  wrapper.find(Button).simulate('click');

  expect(wrapper.state().gifts).toEqual([{ id: 1 }]);
});

it('adds a new gift to the render list when clicking on the `add gift` button', () => {
  wrapper.find(Button).simulate('click');

  expect(wrapper.find(GiftList).children().length).toEqual(2);
});
