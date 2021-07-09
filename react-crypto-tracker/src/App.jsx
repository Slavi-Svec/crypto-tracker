import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import CoinInfo from './Components/CoinInfo/CoinInfo'
import Image from './Components/Image/Image'
import Logo from './Images/crypto-logo.png'
import './App.scss'

const App = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data)
      })

      .catch(error => console.error(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoinInfo = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="app">
      <div className="app__header">
        <Image className="app__logo" src={Logo} alt="CryptoTracker.link logo" />
        <h1 className="app__heading">CryptoTracker.link</h1>
        <form>
          <input
            className="app__input-field"
            type="text"
            placeholder="Search a Coin"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className=" app__container">
        {filteredCoinInfo.map(coin => {
          return (
            <CoinInfo
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              ath={coin.ath}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          )
        })}
      </div>
    </section>
  )
}

export default App
