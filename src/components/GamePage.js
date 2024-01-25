// src/components/GamePage.js
import React, { useState } from 'react';
import './GamePage.css'; // Create this file for styling

const GamePage = () => {
  // State for user cards, computer cards, and the displayed card
  const [userCards, setUserCards] = useState(['Card 1', 'Card 2', 'Card 3', 'Card 4']);
  const [computerCards, setComputerCards] = useState(['Card A', 'Card B', 'Card C', 'Card D']);
  const [displayedCard, setDisplayedCard] = useState('Displayed Card');

  // State for the score
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  // Function to handle user's move (assuming you have some game logic)
  const handleUserMove = () => {
    // Your game logic for user's move here
    // Update user cards, computer cards, displayed card, and scores accordingly
  };

  return (
    <div className="game-container">
      <div className="score-box">
        <p>User Score: {userScore}</p>
        <p>Computer Score: {computerScore}</p>
      </div>

      <div className="user-section">
        <h3>Your Cards</h3>
        <div className="card-container">
          {userCards.map((card, index) => (
            <div key={index} className="card">
              {card}
            </div>
          ))}
        </div>
      </div>

      <div className="display-section">
        <h3>Displayed Card</h3>
        <div className="displayed-card">{displayedCard}</div>
        <button onClick={handleUserMove}>Make Move</button>
      </div>

      <div className="computer-section">
        <h3>Computer Cards</h3>
        <div className="card-container">
          {computerCards.map((card, index) => (
            <div key={index} className="card">
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
