import React, { useContext } from 'react'
import styled from '@emotion/styled';
import Title from 'components/Title';
import ToDoList from 'components/ToDoList';
import { ToDoListContext } from 'contexts/ToDoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

const DataView = () => {
  const {toDoList, onDelete} = useContext(ToDoListContext);

  return (
    <Container>
        <Title label="할 일 목록" />
        <ToDoList />
    </Container>
  )
}

export default DataView