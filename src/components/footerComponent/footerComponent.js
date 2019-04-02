import React, { Component } from 'react';
import './footerComponent.css';

import AppStore from "./img/appstore_badge_en.svg";
import GooglePlay from "./img/googleplay_badge_en.svg";

export default class Footer extends Component {    
    render(){
        return(
           <div>
            <div className='footer'>
              <div className="content has-text-centered">
                <div className='columns is-mobile'>
                    <div className='column about is-6'>
                        <p>
                          <strong>2019 Ballyhoo</strong><br/><br/>
                          Woman camera narrative kanji beef noodles silent fetishism. Construct physical singularity Shibuya youtube j-pop systema papier-mache car Tokyo RAF drone post-nano-rebar geodesic. Shoes corporation pre-geodesic refrigerator Tokyo render-farm beef noodles face forwards tattoo motion uplink.
                        </p>
                    </div>
                    <div className='column'>
                        <p className='cities'>
                          <strong>Cities</strong><br/><br/>
                          <p>Bengaluru</p>
                          <p>New Delhi</p>
                          <p>Chennai</p>
                          <p>Mumbai</p>
                          <p>Lucknow</p>
                          <p>Kolkata</p>
                        </p>
                    </div>
                    <div className='column'>
                        <p className='cities'>
                          <strong>About Us</strong><br/><br/>
                            <p>About Headout</p>
                            <p>Help & FAQs</p>
                            <p>Careers</p>
                            <p>Blog</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Usage</p>
                        </p>
                    </div>
                    <div className='column'>
                        <p className='social'>
                          <strong>Social</strong><br/><br/>                        
                          <i style={{"margin":"5px"}} className="fab fa-twitter-square"></i>
                          <i style={{"margin":"5px"}} className="fab fa-instagram"></i>
                          <i style={{"margin":"5px"}} className="fab fa-facebook"></i>
                          <i style={{"margin":"5px"}} className="fab fa-pinterest"></i>
                        </p>
                        <div className='as'>
                          <img className='gp' src={GooglePlay} alt='AppStore'/>
                        </div>
                        <div className='as'>
                          <img  src={AppStore} alt='GooglePlay'/>
                        </div>
                    </div>            
                  </div>
              </div>
            </div>
          </div>
        )
    }
}