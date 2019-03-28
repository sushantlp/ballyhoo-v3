import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './discoverComponent.css' 


export default class Carousel extends React.Component {  
  items = this.props.items;

  state = {
    galleryItems: this.items.map((i) => (
      <div className={this.props.lift ? 'carlift' : null}>
        <div className={this.props.style ? 'card carcard' : null} key={i}>{i}
          <p> {this.props.txt} </p>
        </div>
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