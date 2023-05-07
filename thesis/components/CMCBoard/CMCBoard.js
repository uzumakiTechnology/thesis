import React, { useState, useContext, useEffect, useCallback } from "react";
import { MarketCapContext } from "../../context/context";
import btc from "../../images/btc.png";
import Down from "../../images/svg/chevronDown";
import Info from "../../images/svg/info";
import CMCTableRow from "./CMCTableRow";
import CMCBoardHeader from '../CMCBoard/CMCBoardHeader'


const CMCBoard = () => {

  let { getTopTenCoin } = useContext(MarketCapContext);
  let [coinData, setCoinData] = useState(null); // refer to data of api response that we need to be tracking (get top ten coin)

  useEffect(() => {
    setData();
  }, []); // ensure this only run once

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoin(); // get data from cmc
      let filteredResponse = [];

      // filtering for top 10 coins
      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i]; // what coin i'm in at that time

        // cmc_rank is an endpoint data
        if (element.cmc_rank <= 10) {
          filteredResponse.push(element);
        }
      }
      setCoinData(filteredResponse);
    } catch (error) {
      console.log(error.message);
    }
  }, [getTopTenCoin]);


  console.log(coinData);

  return (
    <div className='text-white font-bold'>
    <div className='mx-auto max-w-screen-2xl'>
      <table className='w-full'>
        <CMCBoardHeader/>
        
        {coinData && coinData ? (
          coinData.map((coin,index) =>{
            return(
              <CMCTableRow
              key={index}
              starNum={coin.cmc_rank}
              coinName={coin.name}
              coinSymbol={coin.symbol}
              coinIcon={btc}
              showBuy={true}
              hRate={coin.quote.USD.percent_change_24h}
              dRate={coin.quote.USD.percent_change_7d}
              hRateIsIncrement={true}
              price={coin.quote.USD.price}
              marketCapValue={coin.quote.USD.market_cap}
              volumeCryptoValue={coin.quote.USD.volume_24h}
              volumeValue={coin.total_supply}
              circulatingSupply={coin.circulating_supply}
              />
              )
            })
          ) : (
            <></>
          )}

      </table>

    </div>

  </div>
  );
};

export default CMCBoard;
