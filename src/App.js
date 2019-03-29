import React, { Component } from 'react';
import './app.css';
import SlideCard from './components/featCardComponent/featCardComponent'
import Carousel from './components/discoverComponent/discoverComponent'
import Search from './components/searchComponent/searchComponent'

class App extends Component {

    mast_items = [
      <div className='mast'> <img src='https://images.unsplash.com/photo-1525159831892-59d292d558b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='alt' /></div>,
      <div className='mast'> <img src='https://bit.ly/2FGdvRm' alt='alt' /></div>,
      <div className='mast'> <img src='https://bit.ly/2uuMNoy' alt='alt' /></div>
    ]

    dicover_items = [
        <img src='https://images.unsplash.com/photo-1477747219299-60f95c811fef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>,
        <img src='https://images.unsplash.com/photo-1541283014184-791fa57c0735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>,
        <img src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>,
        <img src='https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80' alt='alt'/>,
        <img src='https://images.unsplash.com/photo-1458891216473-4f26bb4eb40e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>
    ]

    featured_items = [
        <SlideCard img='https://images.unsplash.com/photo-1458891216473-4f26bb4eb40e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>,
        <SlideCard img='https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>,
        <SlideCard img='https://images.unsplash.com/photo-1468270738566-d3ec1f179d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>,
        <SlideCard img='https://bit.ly/2U2yExZ' alt='alt'/>,
        <SlideCard img='https://images.unsplash.com/photo-1464676015774-81a71be95929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>
    ]

    trend_items = [
        <img src='https://images.unsplash.com/photo-1553277001-9f2c6bead6f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80' alt='alt'/>,
        <img src='https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='alt'/>,
        <img src='https://images.unsplash.com/photo-1519214605650-76a613ee3245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='alt'/>    
    ]

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
        <div className='navbar has-text-centered'>
            <h1>BALLYHOO</h1>
        </div>
        <section className='mast'>
            <Carousel items={this.mast_items} Mast/>
            <div className='searchanddd'>
                <Search dd options={this.locality_options} ph="Search Locality"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                <Search ph="Search Collections"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;
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
                <div class='column is-5 about'>
                    <p>
                      <strong>2019 Ballyhoo</strong><br/><br/>
                      Woman camera narrative kanji beef noodles silent fetishism. Construct physical singularity Shibuya youtube j-pop systema papier-mache car Tokyo RAF drone post-nano-rebar geodesic. Shoes corporation pre-geodesic refrigerator Tokyo render-farm beef noodles face forwards tattoo motion uplink.
                    </p>
                </div>
                <div class='column is-2'>
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
                <div class='column is-2'>
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
                <div class='column is-3'>
                    <p class='social'>
                      <strong>Social</strong><br/><br/>                        
                      <i class="fab fa-twitter-square fa-2x"></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fab fa-instagram fa-2x"></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fab fa-facebook fa-2x"></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fab fa-pinterest fa-2x"></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;
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