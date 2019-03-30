import Carousel from '../carouselComponent/carouselComponent'
import Search from '../searchComponent/searchComponent'
import React, { Component } from 'react'
import './mastComponent.css'

export default class Mast extends Component {
    mast_items = [
      <div className='mast'> <img src='http://bit.ly/2FA5s7I' alt='alt' /></div>,
      <div className='mast'> <img src='https://bit.ly/2FGdvRm' alt='alt' /></div>,
      <div className='mast'> <img src='https://bit.ly/2uuMNoy' alt='alt' /></div>
    ]
    
    render(){
        return(
           <div>
            <section className='mast'>
                <Carousel items={this.mast_items} Mast/>
                <div className='searchanddd'>
                    <Search dd options={this.locality_options} ph="Search Locality"/>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <Search ph="Search Collections"/>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="searchbtn" type="button">Search</button>
                </div>
            </section><br/><br/>
            </div>
            )
    }
}

