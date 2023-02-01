import React, { useRef } from 'react';

import classes from './Login.module.css';

import { useDispatch } from 'react-redux';
import { loginAction } from '../store/login-slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('name', nameRef.current.value)
    localStorage.setItem('email', emailRef.current.value)
    dispatch(
      loginAction.login()
    );
    nameRef.current.value = '';
    emailRef.current.value = '';
    navigate('/home');
  };

  return (
    <form className={classes.form} onSubmit={loginHandler}>
      <input
        id='name'
        type='text'
        className={classes.name}
        placeholder='Enter your name'
        required
        ref={nameRef}
      />
      <input
        id='email'
        type='email'
        className={classes.name}
        placeholder='Enter your email'
        required
        ref={emailRef}
      />
      <div className={classes.button}>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Login;
