import React from 'react'
import './CoinInfo.scss'

const CoinInfo = ({ name, image }) => {
  return (
    <section className="coin">
      <div className="coin__crypto-coin">
        <img src={image} alt={`${name}`} className="coin__coin-logo" />
        <div className="coin__wrapper">
          <h1 className="coin__name">name</h1>
          <p className="coin__symbol">symbol</p>
        </div>
        <p className="coin__price">0.80</p>
        <p className="coin__ath">4.00</p>
        <p className="coin__market-cap">31,235,294,790.36</p>
        <p className="coin__volume">Volume</p>
      </div>
    </section>
  )
}

export default CoinInfo
