import React, { Component } from 'react';

import Gift from './Gift';
import { Wrapper, Heading, Button, GiftList } from '../elements';

export default class App extends Component {
  state = {
    gifts: [],
  };

  handleClick = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: maxId + 1 });
    this.setState({ gifts });
  };

  render() {
    const { gifts } = this.state;
    return (
      <Wrapper>
        <Heading>Gift Giver</Heading>
        <GiftList>{gifts.map(gift => <li key={gift.id} />)}</GiftList>
        <Button onClick={this.handleClick}>add gift</Button>
        <Gift />
      </Wrapper>
    );
  }
}
