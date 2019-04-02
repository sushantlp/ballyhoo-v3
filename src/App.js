import React, { Component } from 'react'
import Popular from './components/popularComponent/popularComponent'
import Discover from './components/discoverComponent/discoverComponent'
import Featured from './components/featuredComponent/featuredComponent'
import Trending from './components/trendingComponent/trendingComponent'
import Footer from './components/footerComponent/footerComponent'
import Mast from './components/mastComponent/mastComponent'
import Navbar from './components/navbarComponent/navbarComponent'

import './app.css'

class App extends Component {
  
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
        <Navbar options={this.locality_options}/>
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

export default App;