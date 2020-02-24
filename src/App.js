import React from 'react';
import './App.css';
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <div>
        <p>The first to get three in a row wins!</p>
      </div>
      <Game />
    </div>

  );
}

export default App;
