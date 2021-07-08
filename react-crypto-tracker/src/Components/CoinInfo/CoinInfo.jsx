import React from 'react'
import './CoinInfo.scss'

const CoinInfo = ({
  name,
  price,
  ath,
  symbol,
  marketcap,
  volume,
  image,
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
      </div>
      <div className="coin__price-indicator">
        <p className="coin__price-change">{priceChange.toFixed(2)}%</p>
      </div>
    </section>
  )
}

export default CoinInfo
