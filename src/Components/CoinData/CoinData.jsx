import classNames from "classnames";
import React from "react";
import "./CoinData.scss";

const CoinData = ({
  image,
  symbol,
  name,
  price,
  ath,
  marketcap,
  volume,
  priceChange,
  bgWhite
}) => {
  const renderDecimalPrice = (price) => {
    if (parseFloat(price) < 100) return price;
    return price.toLocaleString();
  };

  return (
    <section className="coin">
      <div className="coin__crypto-coin">
        <img
          src={image}
          alt={`${name}`}
          className={classNames("coin__coin-logo", {
            "bg-white": bgWhite
          })}
        />
        <div className="coin__wrapper">
          <h1 className="coin__name">{name}</h1>
          <p className="coin__symbol">{symbol}</p>
        </div>
        <p className="coin__price">${renderDecimalPrice(price)}</p>
        <p className="coin__ath">All Time High: ${renderDecimalPrice(ath)}</p>
        <p className="coin__market-cap">
          Market Cap: ${marketcap.toLocaleString()}
        </p>
        <p className="coin__volume">Volume (24H): ${volume.toLocaleString()}</p>
        {(() => {
          if (priceChange < 0) {
            return (
              <div className="coin__price-indicator">
                <div className="coin__price-down">
                  <i className="fas fa-caret-down fa-2x"></i>
                  <p className="coin__price-change">
                    {priceChange.toFixed(2)}%
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="coin__price-indicator">
                <div className="coin__price-up">
                  <i className="fas fa-caret-up fa-2x"></i>
                  <p className="coin__price-change">
                    {priceChange.toFixed(2)}%
                  </p>
                </div>
              </div>
            );
          }
        })()}
      </div>
    </section>
  );
};

export default CoinData;
