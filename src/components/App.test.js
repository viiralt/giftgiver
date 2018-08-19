import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { Button } from '../elements';
import GiftList from './GiftList';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('initialises the `state` with an empty list of gifts', () => {
    expect(wrapper.state('gifts')).toEqual([]);
  });

  describe('when clicking the `add gift button`', () => {
    beforeEach(() => {
      wrapper.find(Button).simulate('click');
    });

    afterEach(() => {
      wrapper.setState({ gifts: [] });
    });

    it('adds a new gift to the `state`', () => {
      expect(wrapper.state('gifts')).toEqual([{ id: 1 }]);
    });

    it('adds a new gift to the rendered list', () => {
      expect(wrapper.find('.gift-list').children().length).toEqual(1);
    });
  });
});
