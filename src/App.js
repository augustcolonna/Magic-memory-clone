import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const cardImages = [
  { src: "/images/helmet-1.png" },
  { src: "/images/potion-1.png" },
  { src: "/images/sword-1.png" },
  { src: "/images/shield-1.png" },
  { src: "/images/scroll-1.png" },
  { src: "/images/ring-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [countTurns, setCountTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards and duplicate
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setCountTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("those cards match");
        resetTurn();
      }
    } else {
      console.log("those dont match");
      resetTurn();
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setCountTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>Start Game</button>
      <div className="card-grid">
        {cards.map((card) => {
          return (
            <div className="card">
              <Card key={card.id} card={card} handleChoice={handleChoice} />
            </div>
          );
        })}
      </div>
      {countTurns}
    </div>
  );
}

export default App;
