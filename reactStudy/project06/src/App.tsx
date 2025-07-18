import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import DataView from 'components/pages/DataView';
import InputContainer from 'components/InputContainer';
import { useState } from 'react';
import { ToDoListContextProvider } from 'contexts/ToDoList';
import { Route, Routes, Link } from 'react-router-dom';
import ToDoInput from 'components/pages/ToDoInput';
import Header from 'components/Header';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route path="*" element={ <NotFound>404<br/>NOT FOUND</NotFound>} />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
