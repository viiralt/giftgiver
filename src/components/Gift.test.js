import React from 'react';
import { shallow } from 'enzyme';

import Gift from '../components/Gift';

describe('Gift', () => {
  const wrapper = shallow(<Gift />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
