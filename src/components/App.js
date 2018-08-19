import React, { Component } from 'react';

import { Wrapper, Heading } from '../elements';

export default class App extends Component {
  state = {
    gifts: [],
  };

  render() {
    return (
      <Wrapper>
        <Heading>Gift Giver</Heading>
      </Wrapper>
    );
  }
}
