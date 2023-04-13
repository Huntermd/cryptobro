import React from 'react'
import  './CryptoRow.css';
import data from '../data';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

export const CryptoRow = ({coin, fav, setfav}) => {

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 8

  });


  
  let BigDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    

  });


  let USPercentage = new Intl.NumberFormat('en-US', {
    
    maximumSignificantDigits: 2

  });
  let HrColor ; 
  let FourHrColor;
  let DayColor; 

  if( coin.price_change_percentage_1h_in_currency > 0)HrColor = { color: 'green'};
  if( coin.price_change_percentage_1h_in_currency < 0)HrColor = { color: 'red'};

  if( coin.price_change_percentage_7d_in_currency > 0)FourHrColor = { color: 'green'};
  if( coin.price_change_percentage_7d_in_currency < 0)FourHrColor = { color: 'red'};

  if( coin.price_change_percentage_24h_in_currency > 0)DayColor = { color: 'green'};
  if( coin.price_change_percentage_24h_in_currency < 0)DayColor = { color: 'red'};

  return (
    <div className='Container'>
        <div className='CoinMc'> {console.log()}{ fav.includes(coin.symbol.toUpperCase()) ? <AiFillStar onClick={() => setfav(coin.symbol.toUpperCase())}/>: <AiOutlineStar  onClick={() => setfav(coin.symbol.toUpperCase())}/>} {coin.market_cap_rank}</div>
        <div className='CoinImg'><img src={coin.image}/></div>
      <div className='CoinName'>
      
        {coin.name}</div>
        <div className='CoinSymbol'>{coin.symbol.toUpperCase()}</div> 
        <div className='CurrentPrice'>{USDollar.format(coin.current_price)}</div> 
        <div className='HourPercent'  style={HrColor}>{USPercentage.format(coin.price_change_percentage_1h_in_currency)}%</div>
        <div className='DayPercent' style={DayColor}>{USPercentage.format(coin.price_change_percentage_24h_in_currency)}%</div>
        <div className='chart'>
        <Sparklines data={coin.sparkline_in_7d.price} limit={10} width={120} height={40} className='chart'  >
        <SparklinesLine color='blue'/>
        </Sparklines>
        </div>
        <div className='D7Percent' style={FourHrColor}>
        
          {USPercentage.format(coin.price_change_percentage_7d_in_currency)}%</div>
        <div className='Volume'>{BigDollar.format(coin.total_volume)}</div>
        <div className='MarketCap'>{BigDollar.format(coin.market_cap)}</div>
    </div>
  )
}
