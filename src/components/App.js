import React, { Component } from 'react';

import { Wrapper, Heading, Button } from '../elements';
import GiftList from './GiftList';

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
        <div className="gift-list">{gifts.map(gift => <div key={gift.id} />)}</div>
        <Button type="submit" onClick={this.handleClick}>
          Add gift
        </Button>
      </Wrapper>
    );
  }
}
