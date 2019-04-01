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
      <option value="Bengaluru">Bengaluru</option>,
      <option value="Chennai">Chennai</option>,
      <option value="Kolkata">Kolkata</option>,
      <option value="New Delhi">New Delhi</option>,
      <option value="Lucknow">Lucknow</option>
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