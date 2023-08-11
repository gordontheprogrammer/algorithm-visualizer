import React from 'react'
import '../css/Navbar.css'
import ClearBoardBtn from './ClearBoardBtn'


const Navbar = ({ onClearBoard}) => {
  return (
    <div className="topnav">
      <a className="active" href="#">Home</a>
      <ClearBoardBtn onClick={onClearBoard} />
    </div>
  )
}

export default Navbar
