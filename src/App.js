import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import classes from './App.module.css';

import Header from './components/Header';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from './store/login-slice';

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
        <Route path='/login' element={<Login />}/>
      </Routes>
      {/* {isLoggedIn && <h1>Hello</h1>} */}
    </>
  );
}

export default App;
