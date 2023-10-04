import React from "react";
import "../styles/card.css";

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div>
      <div className={flipped ? "flipped" : ""}>
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
