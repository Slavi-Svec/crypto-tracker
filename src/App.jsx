import { React, useEffect, useState } from "react";
import axios from "axios";
import CoinData from "./Components/CoinData/CoinData";
import FearAndGreed from "./Components/FearAndGreed/FearAndGreed";
import Image from "./Components/Image/Image";
import Logo from "./Images/crypto-logo.png";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import "./App.scss";
  
const coinsWithWhiteBackground = ["frax", "iota", "osmosis", "stellar", "near", "elrond-erd-2", "ecomi", "gala", "bittorrent"];

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((result) => {
        setCoins(result.data);
      })

      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoinData = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="app">
      <ScrollButton />
      <div className="app__header">
        <Image className="app__logo" src={Logo} alt="CryptoTracker.link logo" />
        <h1 className="app__heading">CryptoTracker.link</h1>
        <FearAndGreed />
        <form>
          <input
            className="app__input-field"
            type="text"
            placeholder="Search a Coin in AUD"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="app__container">
        {filteredCoinData.map((coin) => {
          return (
            <CoinData
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              ath={coin.ath}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              bgWhite={coinsWithWhiteBackground.includes(coin.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default App;
