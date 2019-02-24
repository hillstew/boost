import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/saved">Saved</NavLink>
      <NavLink to="/sent">Sent</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
