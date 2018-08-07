import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper, Button } from '../elements';

export default class Gift extends Component {
  state = {
    person: '',
    present: '',
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { person } = this.state;
    return (
      <Wrapper>
        <Form onSubmit={this.onSubmit}>
          <InputPerson
            type="text"
            name="person"
            placeholder="please enter gift recipient"
            onChange={event => this.setState({ person: event.target.value })}
            value={person}
          />
        </Form>
        <Button onClick={this.handleButtonClick} type="submit">
          Submit
        </Button>
      </Wrapper>
    );
  }
}

const Form = styled.form``;
export const InputPerson = styled.input``;
