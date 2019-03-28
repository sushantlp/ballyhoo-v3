import React, { Component } from 'react';
import './app.css';
import SlideCard from './components/featCardComponent/featCardComponent'
import Carousel from './components/discoverComponent/discoverComponent'
import Search from './components/searchComponent/searchComponent'

class App extends Component {

    mast_items = [
    <div className='mast'> <img src='https://bit.ly/2UYlRZW' alt='alt' /></div>,
    <div className='mast'> <img src='https://bit.ly/2FGdvRm' alt='alt' /></div>,
    <div className='mast'> <img src='https://bit.ly/2uuMNoy' alt='alt' /></div>
    ]

    dicover_items = [
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>
    ]

    featured_items = [
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>,
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>,
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>,
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>,
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>
    ]

    trend_items = [
        <img src='https://bit.ly/2V1OEg7' alt='alt' />,
        <img src='https://bit.ly/2V1OEg7' alt='alt' />,
        <img src='https://bit.ly/2V1OEg7' alt='alt' />,
        <img src='https://bit.ly/2V1OEg7' alt='alt' />,
        <img src='https://bit.ly/2V1OEg7' alt='alt' />
    ]

  render() {
    return (
      <div>
        <div className='navbar has-text-centered'>
            <h1>BALLYHOO</h1>
        </div>
        <section className='mast'>
            <Carousel items={this.mast_items} Mast/>
            <div className='searchf'>
                <Search ph="Search Locality"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <Search ph="Search Collections"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="searchbtn" type="button">Search</button>
            </div>
        </section>
        <div className='container'>
            <br/><br/>
           <section>
                <h2 className='subtitle'>Discover</h2>
                <Carousel items={this.dicover_items} style txt='Discover'/>
            </section>
            <br/><br/>
            <section>
                <h2 className='subtitle'>Featured</h2>
                <Carousel items={this.featured_items} lift/>
            </section>
            <br/><br/>
            <section>
                <h2 className='subtitle'>Popular</h2>
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-8">
                    <div class="tile">
                      <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification card">
                          1. 
                        </article>
                        <article class="tile is-child notification card">
                          2.  
                        </article>
                      </div>
                      <div class="tile is-parent">
                        <article class="tile is-child notification card">
                          3. 
                        </article>
                      </div>
                    </div>
                    <div class="tile is-parent">
                      <article class="tile is-child notification card">
                        4. 
                      </article>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child notification card">
                      5. 
                    </article>
                  </div>
                </div>
            </section>        
            <br/><br/>
            <section>
                <h2 className='subtitle'>Trending</h2>
                <Carousel items={this.trend_items} style txt='Trending'/>
            </section>
            <br/><br/>
    </div>
        <div className='footer'>
          <div class="content has-text-centered">
            <div class='columns'>
                <div class='column'>
                    <p>
                      <strong>2019 Ballyhoo</strong>.
                    </p>
                </div>
                <div class='column'>
                    <p class='cities'>
                      <strong>Cities</strong><br/><br/>
                      <li>Bengaluru</li>
                      <li>New Delhi</li>
                      <li>Chennai</li>
                      <li>Mumbai</li>
                      <li>Lucknow</li>
                      <li>Kolkata</li>
                    </p>
                </div>
                <div class='column'>
                    <p class='cities'>
                      <strong>About Us</strong><br/><br/>
                        <li>About Headout</li>
                        <li>Help & FAQs</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Usage</li>
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;