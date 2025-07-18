import React from 'react'
import styled from '@emotion/styled';
import Button from 'components/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Lable = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

interface Props {
    readonly label: string;
    readonly onDelete?: () => void;
}

const ToDoItem = ({label, onDelete}: Props) => {
  return (
    <Container>
        <Lable>{label}</Lable>
        <Button label="삭제" onClick={onDelete}></Button>
    </Container>
  )
}

export default ToDoItem