import React from 'react'
// import "./CoinDetail.css";

function CoinDetail({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
  }) {
  return (
    <div className="container">
      <div className="row">
        <div className="coin">
          <img src={image} alt={name}/>
          <h2>{name}</h2>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>

          {priceChange ? priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          ) : "---"}

          <p className="coin-marketcap">
            ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoinDetail;