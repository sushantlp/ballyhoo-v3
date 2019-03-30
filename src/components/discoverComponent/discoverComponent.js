import Carousel from '../carouselComponent/carouselComponent'
import SlideCard from '../slideCardComponent/slideCardComponent'

import React, { Component } from 'react';


export default class Discover extends Component{
    discover_items = [
        <SlideCard img='http://bit.ly/2FA5xIy' alt='alt'/>,
        <SlideCard img='http://bit.ly/2FAH4Tn' alt='alt'/>,
        <SlideCard img='http://bit.ly/2Fzmvqf' alt='alt'/>,
        <SlideCard img='https://bit.ly/2U2yExZ' alt='alt'/>,
        <SlideCard img='http://bit.ly/2FAhVbn' alt='alt'/>
    ]
    render(){
        return(<div className='discover_section'>
                    <h2 className='subtitle'>Discover</h2>
                    <Carousel items={this.discover_items} lift/>
                    <br/><br/>
                </div>
            )
    }
}