import React from 'react'
import styled from '@emotion/styled';
import { Component } from 'react';

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

interface Props {
    readonly counter: number;
}

const Label = ({ counter }: Props) => {
  return (
    <Container>{counter}</Container>
  )
}

class Label2 extends Component<Props> {
  render() {
    const {counter} = this.props;
    return <Container>{counter}</Container>
  }
} 

export default Label2