import React from 'react';
import '../css/Navbar.css';
import ClearBoardBtn from './ClearBoardBtn';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ onClearBoard }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="topnav">
      <div className="logo">
        <h1>Algo Visualizer</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <div className={`dropdown ${dropdownVisible ? 'active' : ''}`}>
          <button className="dropbtn" onClick={toggleDropdown}>Choose Algorithm</button>
          <div className="dropdown-content">
            <Link to="/dijkstra" onClick={closeDropdown}>Dijkstra's Algorithm</Link>
            <Link to="/astar" onClick={closeDropdown}>A* Algorithm</Link>
            {/* Add more algorithm options */}
          </div>
        </div>
      </div>
      <ClearBoardBtn onClick={onClearBoard} />
    </div>
  );
};

export default Navbar;
