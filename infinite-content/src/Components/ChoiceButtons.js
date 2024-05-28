import React from 'react';
import './ChoiceButtons.css';

function ChoiceButtons({ choices, onChoiceSelect }) {
  return (
    <div className="choice-buttons">
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onChoiceSelect(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default ChoiceButtons;