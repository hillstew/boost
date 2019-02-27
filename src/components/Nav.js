import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="Nav">
      <NavLink to="/saved">Saved</NavLink>
      <hr />
      {/* <NavLink to="/sent">Sent</NavLink>
      <hr /> */}
      <NavLink to="/about">About</NavLink>
      <hr />
    </nav>
  );
};
