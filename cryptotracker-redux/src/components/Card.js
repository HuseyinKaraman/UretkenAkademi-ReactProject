import React from "react";

import "./Cardstyle.css";

function Card({ name, price, symbol, marketcap, volume, image, priceChange }) {
  return (
    <div className="card">
      <div className="img-holder">
        <img src={image} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="symbol">{symbol}</div>
      <div className="price">${price}</div>
      <div className="status">
        <p>24H: </p>
        {priceChange ? (
          <p className={Math.sign(priceChange) === 1 ? "positive" : "negative"}>
            {priceChange.toFixed(4)}%
          </p>
        ) : (
          "---"
        )}
      </div>
      <div className="cap">
        <div className="market-cap">Market Cap: ${marketcap}</div>
        <div className="volume-cap">Total volume: ${volume}</div>
      </div>
    </div>
  );
}

export default Card;
