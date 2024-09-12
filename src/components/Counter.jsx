import React,{useState} from 'react'


function Counter() {

    const [count, setCount]=useState(0)
    const subnum=()=>{
      setCount(count-1)
      
  }
 
  const addNum =()=>{
    setCount(count+1)
}

    
   
  return (
    <>
       <span style={
        {
          border:"0.5px solid black",
          padding:"5px",
          textAlign:"center",
          marginRight:"20px"
        }
       }> Add to cart.     </span>
      <button onClick={addNum} style={{
        padding:"5px",
        margin:"10px"
      }}>+</button>
      <span>{count}</span>
      <button onClick={subnum}style={{
        padding:"5px",
        margin:"10px"
      }}>-</button>
      </>
  )
}

export default Counter
