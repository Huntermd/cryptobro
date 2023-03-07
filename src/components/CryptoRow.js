import React from 'react'
import  './CryptoRow.css';
import data from '../data';

export const CryptoRow = ({coin}) => {

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 8

  });

  let USPercentage = new Intl.NumberFormat('en-US', {
    
    maximumSignificantDigits: 2

  });
  let HrColor ; 
  let FourHrColor;
  let DayColor;
  return (
    <div className='Container'>
        <div>{coin.market_cap_rank}</div>
      <div className='CoinName'>
      <img src={coin.image}/>
        {coin.name}</div>
        <div className='CoinSymbol'>{coin.symbol.toUpperCase()}</div> 
        <div className='CurrentPrice'>{USDollar.format(coin.current_price)}</div> 
        <div className='HourPercent' style=''>{USPercentage.format(coin.price_change_percentage_H_in_currency)}%</div>
        <div className='FourHrPercent'>{USPercentage.format(coin.price_change_percentage_4h_in_currency)}%</div>
        <div className='DayPercent'>{USPercentage.format(coin.price_change_percentage_D_in_currency)}%</div>
        <div>{USDollar.format(coin.total_volume)}</div>
        
    </div>
  )
}
