import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Title from 'components/Title';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import { useState } from 'react';
import { ToDoListContext } from 'contexts/ToDoList';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
    readonly onClose: () => void;
}

const ToDoInput = ({onClose}: Props) => {
  const {onAdd} = useContext(ToDoListContext)
  const [toDo, setToDo] = useState('');

  const onAddTodo = () => {
    if (toDo === '') return;
    
    onAdd(toDo);
    setToDo('');
    onClose();
  }

  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button color="#304FFE" label="추가" onClick={onAddTodo} ></Button>
        </InputContainer>
      </Contents>
    </Container>
  )
}

export default ToDoInput