
import './App.css';
import Frontpage from './Frontpage';
import Userpage from './Userpage';
import React, { useState } from 'react'

function App() {

  const [currentView, setView] = useState("Front");

  return (
    <div className="App">
      <header className="App-header">
      {currentView === "Front" ? (
        <Frontpage setView={setView} />
      ) : (
        <Userpage setView={setView} />
      )}
      </header>
    </div>
  );
}

export default App;
