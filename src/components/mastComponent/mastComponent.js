import Carousel from '../carouselComponent/carouselComponent'
import Search from '../searchComponent/searchComponent'
import React, { Component } from 'react'
import './mastComponent.css'

export default class Mast extends Component {
    mast_items = [
      <div className='mast1'/>,
      <div className='mast2'/>,
      <div className='mast3'/>
    ]
    
    render(){
        return(
          <div>
            <div className='mast_search'>
              <Carousel className='mast' items={this.mast_items} Mast/>
            </div>
              <div id='searchbar' className='columns is-mobile searchanddd'>
                <div className='column is-4 ' >
                  <Search dd options={this.props.options} ph="Search Locality"/>
                </div>
                <div className='column'>  
                  <Search ph="Search Collections"/>
                </div>
                <div className='column is-3' >
                    <button className="searchbtn" type="button">Search</button>
                </div>
              </div>
            </div>
            )
    }
}

