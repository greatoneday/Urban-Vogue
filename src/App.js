import logo from './logo.svg';
import './App.css';
import Hero from './components/Main';
import Card from './components/Card';
import prd from './data/Product.json'
import { useState,useContext } from 'react';
import { CartProvider } from './CartContext';


function App() {

//   const [mode,setMode]=useState()
const [light,setLight]=useState(true)


  

//   const light ={
//     color:"black",
//     backgroundColor:"white"
//   }
//   const dark ={
//     color:"white",
//     backgroundColor:"black"
//   }
  const toggleMode=()=>{
    setLight(!light)
  }

  
  return (
   <>
   <CartProvider>
   <div className={`App ${light?`light`:"dark"}`}>
   
   <button  className="mode" onClick={toggleMode}>{light?"🌞":"🌙"} </button>
   <Hero props={light?"navlight":"navdark"}/>
  <div style={
  {
    display:"flex",
    justifyContent:"space-evenly",
    flexWrap:"wrap",
    gap:"40px",
    
    
   }
  }>
    {
      prd.map(i=>(<Card {...i} />))
    }
  </div>
    <br/>
    </div>
    </CartProvider>
   </>
  );
}

export default App;
