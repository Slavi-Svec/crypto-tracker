import React from 'react'
import './CoinInfo.scss'

const CoinInfo = ({
  image,
  symbol,
  name,
  price,
  ath,
  marketcap,
  volume,
  priceChange
}) => {
  return (
    <section className="coin">
      <div className="coin__crypto-coin">
        <img src={image} alt={`${name}`} className="coin__coin-logo" />
        <div className="coin__wrapper">
          <h1 className="coin__name">{name}</h1>
          <p className="coin__symbol">{symbol}</p>
        </div>
        <p className="coin__price">${price.toLocaleString()}</p>
        <p className="coin__ath">All Time High: ${ath.toLocaleString()}</p>
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
            )
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
            )
          }
        })()}
      </div>
    </section>
  )
}

export default CoinInfo
