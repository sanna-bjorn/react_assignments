import React, { useEffect, useState } from 'react';
import Card from './Card';
import cloud from '../assets/cloud.jpg';
import dreamtext from '../assets/dreamtext.jpg';
import headphones from '../assets/headphones.jpg';
import neko from '../assets/neko.jpg';
import torigate from '../assets/torigate.jpg';

//Card container renders Card.sj and holds info of the game characters.
function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    {
      src: cloud,
      title: 'Thought',
      backGroundColor: 'rgb(255,255,150)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: dreamtext,
      title: 'Dream',
      backGroundColor: 'rgb(255,255,150)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: headphones,
      title: 'Headphones',
      backGroundColor: 'rgb(255,255,150)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: neko,
      title: 'Neko cat',
      backGroundColor: 'rgb(255,255,150)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: torigate,
      title: 'Tori gate',
      backGroundColor: 'rgb(255,255,150)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
  ];

  //Shuffle function to show random order of cards. useState hook defined with initial state of images.
  const [cards, setNewCards] = useState(images);

  //loop through cards while i is smaller than array lenght, larger than 0, subtract 1 from i on each loop. Create randomID's with Math.random().
  const shuffleCards = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIDs = Math.floor(Math.random() * i);
      [newCards[randomIDs], newCards[i]] = [newCards[i], newCards[randomIDs]];
    }
  };

  //Update NewCards with shuffle function and set a new array of cards.

  useEffect(() => {
    const newCards = [...cards];
    shuffleCards(newCards);
    setNewCards(newCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, highScore]);

  //map through Cards with card information

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </>
  );
}

export default CardContainer;
