import React from 'react'
import '../css/Navbar.css'

const ClearBoardBtn = ({ onClearBoard }) => {
  return (
    <button className='clear-btn' onClick={onClearBoard}>
        Clear The Board
    </button>
  )
}

export default ClearBoardBtn
