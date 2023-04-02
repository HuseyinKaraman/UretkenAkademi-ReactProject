import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins } from "../redux/coinSlice";
import Card from "./Card";
import Header from "./Header";
import Loading from "./Loading";

function Main() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.items);
  const page = useSelector((state) => state.coins.page);
  const hasNextPage = useSelector((state) => state.coins.hasNextPage);
  const status = useSelector((state) => state.coins.status);
  const error = useSelector((state) => state.coins.error);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "idle") dispatch(fetchCoins(page));
  }, [dispatch, page, status]);

  if (status === "loading" && page === 1) {
    return <Loading/>
  }
  if (status === "failed") {
    return <>error : {error}</>;
  }

  const nextPage = () => {
    dispatch(fetchCoins(page));
  };


  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="search">
        <Header />
        <input
          className="input"
          type="text"
          onChange={handleChange}
          placeholder="Example: Bitcoin Cash"
        />
      </div>

      <div className="container">
      {filteredCoins?.map((coin) => {
        return (
          <Card
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            />
            );
          })}
      </div>
      {filteredCoins.length===0 && (<h1 style={{color:"black"}}>No Found Coin</h1>)}
      
      <div className={search !== "" ? "d-none":"btns"}>
        <button onClick={() => nextPage()} disabled={!hasNextPage}>
          {hasNextPage ? "Load" : "No page"}
        </button>
      </div>
    </div>
  );
}

export default Main;
