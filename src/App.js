import React, { Component } from 'react';
import './app.css';
import Popular from './components/popularComponent/popularComponent'
import Discover from './components/discoverComponent/discoverComponent'
import Featured from './components/featuredComponent/featuredComponent'
import Trending from './components/trendingComponent/trendingComponent'
import Footer from './components/footerComponent/footerComponent'
import Mast from './components/mastComponent/mastComponent'
import Navbar from './components/navbarComponent/navbarComponent'

class App extends Component {
  render() 
  {
    return (
      <div>
        <Navbar />
        <Mast/>
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