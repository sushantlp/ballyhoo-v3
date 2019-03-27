import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './discoverComponent.css' 
export default class Gallery extends React.Component {  
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 4 },
  };
  
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };
 
  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };
  
  galleryItems() {
    return (
      [ 
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>,
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>,
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>,
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>,
      <img src='https://bit.ly/2OwcNt6' alt='alt'/>
      ].map((item, i) => (
        <div key={`key-${i}`} className="card carcard">
          <h2>{item}</h2>
        </div>
      ))
    )
  };
  
  render() {
    const items = this.galleryItems();
 
    return (
      <AliceCarousel
        items={items}
        duration={400}
        autoPlay={false}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        responsive={this.responsive}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        dotsDisabled={true}
        buttonsDisabled={false}
      />
    );
  }
}