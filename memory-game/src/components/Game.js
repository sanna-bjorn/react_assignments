import React, { useState } from 'react';
import CardContainer from './CardContainer';
import Header from './Header';

//setup game functionality, set score default to be 0 and cards array to be empty
function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArray, setCardsArray] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };
  const handleHighScore = () => {
    setHighScore(score);
  };

  const handleCard = (cardName) => {
    setCardsArray((prevArr) => [...prevArr, cardName]);
  };
  const reset = () => {
    setScore(0);
    setCardsArray([]);
  };
  const handleGameLogic = (cardName) => {
    if (!cardsArray.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <>
      <Header score={score} highScore={highScore} />
      <div className='card-container' id='card-container'>
        <CardContainer
          handleGameLogic={handleGameLogic}
          score={score}
          highScore={highScore}
        />
      </div>
    </>
  );
}

export default Game;
