import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
  return (
    <nav className={classes['header-container']}>
      <ul className={classes.list}>
        <li className={classes.home}>
          <NavLink to='home' className={({isActive}) => isActive ? classes.active : ''}>
            <i className='fa-solid fa-house-user'></i>Home
          </NavLink>
        </li>
        <li className={classes.login}>
          <NavLink to='login' className={({isActive}) => isActive ? classes.active : ''}>
            Login
          </NavLink>
        </li>
        <button className={classes.logout}>Logout</button>
      </ul>
    </nav>
  );
};

export default Header;
