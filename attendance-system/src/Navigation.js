// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Login</Link>
      <Link to="/select-class">Select Class</Link>
      <Link to="/mark-attendance">Mark Attendance</Link>
    </nav>
  );
};

export default Navigation;
