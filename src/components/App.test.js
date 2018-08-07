import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { Button, GiftList } from '../elements';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render the <App /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('initialises `state` with an empty list of gifts', () => {
    // App.state.gifts
    expect(wrapper.state().gifts).toEqual([]);
  });

  describe('when clicking the `add gift button`', () => {
    beforeEach(() => {
      wrapper.find(Button).simulate('click');
    });

    afterEach(() => {
      wrapper.setState({ gifts: [] });
    });

    it('adds a new gift to `state`', () => {
      expect(wrapper.state().gifts).toEqual([{ id: 1 }]);
    });

    it('adds a new gift to the render list', () => {
      expect(wrapper.find(GiftList).children().length).toEqual(1);
    });
  });
});
