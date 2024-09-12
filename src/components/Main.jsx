import React from 'react'
import './Hero.css'


function Hero({props}) {
  return (
    <div>
      <div className="nav">
        <nav className={props}>
          <h2>Urban Vogue</h2>
            <ul>
                <li><a href="">Home </a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="hero">
        <h1>Discover Fashion <br /> That Fits Your Style <br />And Life. </h1>
        <p>At Urban Vogue , we believe fashion is more than just clothing—it's a way to express who you are. Whether you're looking for the latest trends or timeless classics, we've curated a collection that caters to every style and occasion. From casual wear that fits your everyday vibe to sophisticated pieces that define elegance, we’ve got something for everyone.</p>
      </div>

    
    </div>
  )
}

export default Hero
