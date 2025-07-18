import React, { useContext } from 'react'
import styled from '@emotion/styled';
import ToDoItem from 'components/ToDoItem';
import { ToDoListContext } from 'contexts/ToDoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToDoList = () => {
  const {toDoList, onDelete} = useContext(ToDoListContext);

  return (
    <Container>
        {toDoList.map((todo) => (
            <ToDoItem
                key={todo}
                label={todo}
                onDelete={() => {
                    if (typeof onDelete === 'function') onDelete(todo);
                }}
            ></ToDoItem>
        ))}
    </Container>
  )
}

export default ToDoList