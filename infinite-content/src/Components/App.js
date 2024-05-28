import React, { useState } from 'react';
import MenuBar from './MenuBar';
import ChoiceButtons from './ChoiceButtons';
import ThreeScene from './ThreeScene';
import './App.css';

function App() {
  const [choices, setChoices] = useState([
    'Choice 1',
    'Choice 2',
    'Choice 3',
    'Choice 4'
  ]);

  const handleChoice = (choice) => {
    console.log(`Selected: ${choice}`);
    // Implement logic to move camera and update choices
  };

  return (
    <div className="App">
      <MenuBar />
      <ChoiceButtons choices={choices} onChoiceSelect={handleChoice} />
      <ThreeScene />
    </div>
  );
}

export default App;