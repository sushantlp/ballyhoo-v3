import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './discoverComponent.css' 


export default class Gallery extends React.Component {  
  items = [
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>,
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>,
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>,
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>,
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>
  ]

  state = {
    galleryItems: this.items.map((i) => (
      <div className='card carcard' key={i}>{i}
        <p> Ballyhoo </p>
      </div>
      ))
  }

  render() { 
    return (
    <div>
      <div className='carousel-btns'>
        <button className='prevbtn' onClick={() => this.Carousel._slidePrev()}>⮃</button>
        <button className='nextbtn' onClick={() => this.Carousel._slideNext()}>⮁</button>    
      </div>
      <div className='carousel'>
        <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            items={this.state.galleryItems}
            ref={(el) => (this.Carousel = el)}   
            responsive={{ 1024: {items:4} }}   
            />
      </div>
    </div>

    );
  }
}