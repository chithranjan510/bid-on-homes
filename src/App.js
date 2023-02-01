import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/Login';

import classes from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
