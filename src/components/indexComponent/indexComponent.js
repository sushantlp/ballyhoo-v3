import React, { Component } from 'react'

import Popular from '../popularComponent/popularComponent'
import Discover from '../discoverComponent/discoverComponent'
import Featured from '../featuredComponent/featuredComponent'
import Trending from '../trendingComponent/trendingComponent'
import Footer from '../footerComponent/footerComponent'
import Mast from '../mastComponent/mastComponent'


export default class Index extends Component {
  locality_options = [
      'Bengaluru',
      'Chennai',
      'Kolkata',
      'New Delhi',
      'Lucknow'
  ]
  
  render() 
  {
    return (
      <div>
        <Mast options={this.locality_options}/>
        <div className='container'>
          <Discover />
          <Featured />
          <Popular />
          <Trending />        
        </div>
        <Footer />    
      </div>
      );
  }
}