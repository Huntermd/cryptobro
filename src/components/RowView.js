import React from 'react'
import { CryptoRow } from './CryptoRow'
import {AiOutlineStar} from 'react-icons/ai';
export const RowView = (props) => {
  return (
    <>
         <div className='Container'>
        <div className='CoinMc'>  <AiOutlineStar/> Rank</div>
      <div className='CoinName'>
      name
        </div>
        
        <div className='CurrentPrice'>Price</div> 
        <div className='HourPercent' >1Hr</div>
        <div className= 'DayPercent' >24Hr</div>
        <div className='chart'>chart</div>
        <div className='D7Percent' >7d</div>
        <div className='Volume'>Volume</div>
        <div className='MarketCap'>Market Cap</div>
    </div>
    {props.coins.map((coin) => {
      
      return (<CryptoRow coin={coin} fav={props.fav} setfav={props.setfav}/>)
     })}
     
    </>
  )
}
