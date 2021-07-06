import React from 'react'
import './CoinInfo.scss'

const CoinInfo = () => {
  return (
    <section className="coin">
      <div className="coin__crypto-coin">
        <img
          src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
          alt="xrp"
          className="coin__coin-logo"
        ></img>
        <div className="coin__wrapper">
          <h1 className="coin__name">Ripple</h1>
          <p className="coin__symbol">xrp</p>
        </div>
        <p className="coin__price">0.80</p>
        <p className="coin__ath">4.00</p>
        <p className="coin__market-cap">31,235,294,790.36</p>
      </div>
    </section>
  )
}

export default CoinInfo
