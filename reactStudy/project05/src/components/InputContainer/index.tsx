import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { useState } from 'react';
import ToDoInput from 'components/ToDoInput';
import ShowInputButton from 'components/ShowInputButton';
import { ToDoListContext } from 'contexts/ToDoList';

const InputContainer = () => {
  const {onAdd} = useContext(ToDoListContext);
  const [showToDoInput, setShowToDoInput] = useState(false);

  return (
    <>
    {showToDoInput && <ToDoInput onClose={() => setShowToDoInput(false)} />}
    <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
    />
    </>
  )
}

export default InputContainer