import React from 'react';
import './featCardComponent.css'


export default class SlideCard extends React.Component{  
  render(){
    return(
      <div className='slantCard card animated'>
        <div className='figure slant-rotate'>
          <img src={this.props.img} alt={this.props.alt}/>
        </div>
        <div className='bottom'>
          <p>Hello World</p>
          <p className='details'>Details</p>
       </div>
      </div>
    )
  }
}