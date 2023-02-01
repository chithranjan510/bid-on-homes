import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/login-slice';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const logoutHandler = () => {
    dispatch(loginAction.logout());
  };

  return (
    <div className={classes['container-nav']}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.home}>
            <NavLink
              to='home'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              <i className='fa-solid fa-house-user'></i>
              {isLoggedIn ? localStorage.getItem('name') : 'Home'}
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li className={classes.login}>
              <NavLink
                to='login'
                className={({ isActive }) => (isActive ? classes.active : '')}
              >
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <button className={classes.logout} onClick={logoutHandler}>
              Logout
            </button>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
