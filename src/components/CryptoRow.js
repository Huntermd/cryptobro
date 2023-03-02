import React from 'react'
import  './CryptoRow.css';
import data from '../data';

export const CryptoRow = ({coin}) => {
  return (
    <div className='Container'>
        
      <div className='CoinName'>
      <img src={coin.image}/>
        {coin.name}</div>
        <div className='CoinSymbol'>{coin.symbol}</div> 
        <div className='CurrentPrice'>{coin.current_price}</div> 
        <div>{coin.price_change_percentage_H_in_currency}</div>
        <div>{coin.price_change_percentage_D_in_currency}</div>
        <div>{coin.price_change_percentage_4h_in_currency}</div>
        <div>{coin.total_volume}</div>
        <div>{coin.total_volume}</div>
    </div>
  )
}
