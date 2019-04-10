import React, { Component } from 'react'
import {Route, BrowserRouter as Router} from "react-router-dom";

import './app.css'

import Index from './components/indexComponent/indexComponent';
import List from './components/listComponent/listComponent';
import Merchant from './components/merchantComponent/merchantComponent';
import Navbar from './components/navbarComponent/navbarComponent'
import Footer from './components/footerComponent/footerComponent'

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
      <Router> 
        <Navbar options={this.locality_options}/>
        <Route path="/" exact component={Index} />
        <Route path="/list" exact component={List}/>
        <Route path="/merchant" exact component={Merchant}/>
        <Footer />    
      </Router>
      );
  }
}

export default App;