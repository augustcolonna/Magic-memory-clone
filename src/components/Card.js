import React from "react";
import "../styles/card.css";

function Card({ card, handleChoice }) {
  const handleClick = (card) => {
    handleChoice(card);
  };

  return (
    <div>
      <div>
        <img className="front" src={card.src} alt="card-front" />
        <img
          className="back"
          src="/images/cover.png"
          onClick={handleClick}
          alt="card-back"
        />
      </div>
    </div>
  );
}

export default Card;
