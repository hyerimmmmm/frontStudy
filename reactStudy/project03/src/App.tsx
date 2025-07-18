import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import Button from 'components/Button/Button';
import Label from 'components/Label/Label';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusify-content: center;
`;

const Title = styled.h1`
margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-center: center;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };

  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Title>Countert App</Title>
      <Contents>
        <Button label="-" onClick={sub}></Button>
        <Label counter={counter}></Label>
        <Button label="+" onClick={add}></Button>
      </Contents>
    </Container>
  );
}

export default App;
