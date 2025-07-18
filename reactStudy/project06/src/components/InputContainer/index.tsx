import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { useState } from 'react';
import ToDoInput from 'components/pages/ToDoInput';
import ShowInputButton from 'components/ShowInputButton';
import { ToDoListContext } from 'contexts/ToDoList';

const InputContainer = () => {
  const {onAdd} = useContext(ToDoListContext);
  const [showToDoInput, setShowToDoInput] = useState(false);

  return (
    <>
    {showToDoInput && <ToDoInput />}
    <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
    />
    </>
  )
}

export default InputContainer