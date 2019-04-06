import React from 'react';
import './slideCardComponent.css'


export default class SlideCard extends React.Component{  
  render(){
    return(
      <div className='slantCard card animated'>
        <div className='figure slant-rotate'>
          <img src={this.props.img}  width={this.props.width} alt={this.props.alt}/>
        </div>
        <div className='bottom'>
          <p>Hello World</p>
          <p className='details'>Details</p>
       </div>
      </div>
    )
  }
}