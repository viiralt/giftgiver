import React from 'react';
import { shallow } from 'enzyme';

import Gift from './Gift';
import { InputPerson } from './Gift';

describe('Gift', () => {
  const wrapper = shallow(<Gift />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('initialises person and present in `state`', () => {
    expect(wrapper.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Uncle Bobo';
    beforeEach(() => {
      wrapper.find(InputPerson).simulate('change', {
        target: { value: person },
      });
    });

    it('updates the person in `state`', () => {
      expect(wrapper.state().person).toEqual(person);
    });
  });
});
