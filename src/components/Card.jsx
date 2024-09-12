import React from 'react'
import './card.css'
import Counter from './Counter'


function Card({img,product_name,description},props) {
  return (
    <>
    <div className={`cdd ${props}`}>
      <img src={img} alt="" />

      <h1>{product_name}</h1>
      <p>{description}</p>
      <br />
      <Counter/>
      <br />
    </div>
   
    </>
  )
}

export default Card
