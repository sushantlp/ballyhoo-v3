import Carousel from '../carouselComponent/carouselComponent'
import React, { Component } from 'react';
import './trendingComponent.css'
export default class Trending extends Component {
    trend_items = [
        <img src='http://bit.ly/2FG2kH9' alt='alt'/>,
        <img src='http://bit.ly/2Fzn2IL' alt='alt'/>,
        <img src='http://bit.ly/2FznkPR' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='http://bit.ly/2FAUT4k' alt='alt'/>    
    ]
    
    render(){
        return(
           <div className='trending_section'>
                <h2 className='subtitle'>Trending</h2>
                <Carousel items={this.trend_items} style txt='Discover'/>
                <br/><br/>
            </div>
            )
    }
}

