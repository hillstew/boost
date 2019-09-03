import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../components/Logo';

export const Nav = () => {
  return (
    <nav className='Nav'>
      <div className='App-nav-logo-div'>
        <Logo />
        <div classname='App-links'>
          <NavLink to='/saved' className='Nav-a'>
            Saved
          </NavLink>
          <hr />
          <NavLink to='/sent' className='Nav-a'>
            Sent
          </NavLink>
          <hr />
          <NavLink to='/about' className='Nav-a'>
            About
          </NavLink>
          <hr />
        </div>
      </div>
    </nav>
  );
};
