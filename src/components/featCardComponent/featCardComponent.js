import React from 'react';
import './featCardComponent.css'
export default class SlideCard extends React.Component{
  render(){
    return(
      <div className='slantCard card animated'>
        <div className='figure slant-rotate'>
          <img src='https://bit.ly/2OwcNt6'/>
        </div>
        <div className='bottom'>
          <p>Hello World</p>
          <p className='details'>Details</p>
       </div>
      </div>
    )
  }
}