
import { useState } from 'react';
import './index.css';

const App=()=> {
  const[diceNum, setDiceNum]= useState(6)
  const refreshDice =()=>{
   const randomNum= Math.floor(Math.random()*6)+1
  setDiceNum(randomNum)
  }
  return (
    <div>
      <center>
      <img height={300} width={300} src= {require(`./assets/${diceNum}.png`)}></img>
      <br/>
      <button onClick={()=> refreshDice()} className='button'>Roll</button>
      </center>
    </div>

  );
}

export default App;
