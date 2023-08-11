import logo from './logo.svg';
import './App.css';
import PathfindingVisualizer from './components/PathfindingVisualizer'
import Navbar from './components/Navbar';
import ClearBoardBtn from './components/ClearBoardBtn';
import { useState } from 'react';



function App() {
  const [board, setBoard] = useState('');

  const handleClearBoard = () => {
    
  }
  return (
    <div className="App">
      <Navbar onClearBoard={handleClearBoard} />
      <PathfindingVisualizer />
    </div>
  );
}

export default App;
