import React from 'react';
import logo from '../images/betheboost.png';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <footer className="Logo-footer">
      <Link to="/">
        <img src={logo} alt="be the boost logo" height="200px" />
      </Link>
    </footer>
  );
};
