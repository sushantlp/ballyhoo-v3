import Carousel from '../carouselComponent/carouselComponent'
import React, { Component } from 'react';
import './featuredComponent.css'


export default class Featured extends Component {
    featured_items = [
        <img src='http://bit.ly/2U4qwwZ' alt='alt'/>,
        <img src='http://bit.ly/2U0MtNs' alt='alt'/>,
        <img src='http://bit.ly/2FAUIGc' alt='alt'/>,
        <img src='http://bit.ly/2FzZmnM' alt='alt'/>,
        <img src='http://bit.ly/2FA5xIy' alt='alt'/>
    ]
    
    render(){
        return(
           <div className='featured_section'>
                <h2 className='subtitle'>Featured</h2>
                <Carousel items={this.featured_items} style txt='Discover'/>
                <br/><br/>
            </div>
            )
    }
}

