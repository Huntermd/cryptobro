import React from 'react'
import { CryptoCard } from './CryptoCard'

export const CardView = (props) => {
  return (
    <>
  {props.coins.map((coin) => {
      
      return (<CryptoCard coin={coin} fav={props.fav} setfav={props.setfav} key={coin.name}/>)
     })}
    </>
  )
}
