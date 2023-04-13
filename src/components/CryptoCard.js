import React from 'react'
import './CryptoCard.css';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

export const CryptoCard = ({coin}) => {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 8

  });

  let USPercentage = new Intl.NumberFormat('en-US', {
    
    maximumSignificantDigits: 2

  });

  let BigDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    

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
    <div className='cryptoCard'>
       <div className='cryptoImgColumn'>
       <div className='cryptoImg'>
       <img src={coin.image}/>
           </div>
       </div>
       <div className='cryptoInfoColumn'>
       <div className='cryptoInfo'>
          <div>
          {coin.name}
            <div className='cryptoSym'>{coin.symbol.toUpperCase()}</div>
            <div className='cryptoPrice'>
            <div> Price</div>
          {USDollar.format(coin.current_price)}
          </div>
          </div>
        <div className='containerPrices'>
      
          <div className='cryptoPrice'>
            <div> 1Hr</div>
            <div  style={HrColor}>{USPercentage.format(coin.price_change_percentage_1h_in_currency)}%</div>
          </div>
          <div className='cryptoPrice'>
            <div> 24Hr</div>
            <div style={DayColor}>{USPercentage.format(coin.price_change_percentage_24h_in_currency)}%</div>
          </div>
       
        <div className='cryptoPrice'>
        <div className='chart'>
        <Sparklines data={coin.sparkline_in_7d.price} limit={10} width={120} height={40} className='chart'  >
        <SparklinesLine color='blue'/>
        </Sparklines>
        </div>
          </div>
        <div className='cryptoPrice'>
            <div> 7d</div>
            <div style={FourHrColor}>{USPercentage.format(coin.price_change_percentage_7d_in_currency)}%</div>
          </div>
        </div>

          <div className='VolumeMarket'>
          <div className='cryptoPrice'>
            <div> Volume</div>
            {BigDollar.format(coin.total_volume)}
          </div>
          <div className='cryptoPrice'>
            <div> Market Price</div>
            {BigDollar.format(coin.market_cap)}
          </div>
          </div>
            </div>
       </div>

    </div>
  )
}
