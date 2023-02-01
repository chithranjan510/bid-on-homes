import React from 'react';

import classes from './Login.module.css';

const Login = () => {
  return (
    <form className={classes.form}>
      <input
        id='name'
        type='text'
        className={classes.name}
        placeholder='Enter your name'
        required
      />
      <input
        id='email'
        type='email'
        className={classes.name}
        placeholder='Enter your email'
        required
      />
      <div className={classes.button}>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Login;
