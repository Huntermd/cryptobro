import { useEffect, useState } from 'react';
import './App.css';
import { CryptoRow } from './components/CryptoRow';
 import data from './data';
import axios from 'axios';
import './components/CryptoRow.css'
import { CryptoCard } from './components/CryptoCard';
import { RowView } from './components/RowView';
import { CardView } from './components/CardView';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { AdRow } from './components/AdRow';

function App() {

  const [coinData, setCoinData] = useState(null); 
  const[compact,setCompact] = useState(false);
  const [Fav,setFav] = useState([]);

useEffect(() => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
    .then(function (response) {
      console.log(response);
      setCoinData(response.data);
    })
    .catch(function (error) {
      
      console.log(error);
    })

}, []);

const ToggleFav = (coin) =>{
  let oldfav = Fav;
  if(oldfav.includes(coin)){
let newfav = oldfav.filter(f => f !== coin)

setFav(newfav);
  }else{
    let newfav = coin;
    setFav([...Fav, newfav])
  }
  
}

useEffect(() => {
  function handleResize() {
    let width = window.innerWidth;
    
    if(width <900) {
      setCompact(true);
    } else {
      setCompact(false)
    }
  }

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);

}, []);

if(coinData === null) {
  return(
    <div>
      <h1>loading...</h1>
    </div>
  );
}



  return (    
    <Layout>
<Header/>
 <div className="App">

     

   {/* <h2> Top {coinData.length} coins</h2> */}
    <AdRow data = {coinData}/>
   {compact ? (<CardView coins={coinData} fav={Fav} setfav={setFav}/>): (<RowView coins={coinData} fav={Fav} setfav={ToggleFav}/>)}
  
   
   </div>
   <Footer/>
    </Layout>
      
    
   
  );
}

export default App;
