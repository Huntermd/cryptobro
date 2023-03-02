import './App.css';
import { CryptoRow } from './components/CryptoRow';
import data from './data';

function App() {
  return (    
    <div className="App">
     
    <h2> Top {data.length} coins</h2>

     {data.map((coin) => {
      return (<CryptoRow coin={coin}/>)
     })}
    </div>
  );
}

export default App;
