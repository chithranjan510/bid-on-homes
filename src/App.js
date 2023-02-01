import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import classes from './App.module.css';

import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from './store/login-slice';
import { Navigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)

  useEffect(() => {
    if(localStorage.getItem('name') && !isLoggedIn) {
      dispatch(loginAction.login());
    }
  }, [dispatch, isLoggedIn])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={!isLoggedIn ? <Login /> : <Navigate replace to='/home'/>}/>
        <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate replace to='/login'/>}/>
      </Routes>
    </>
  );
}

export default App;
