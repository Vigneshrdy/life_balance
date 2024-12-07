import React from "react";
import "./card.css"; // Import the styles

const Card = ({ title, subtitle }) => {
  return (
    <div className="card">
      <div className="card-front">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="card-back">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Card;
