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
                <div className='columns'>
                    <div className='column is-5 about'>
                        <p>
                          <strong>2019 Ballyhoo</strong><br/><br/>
                          Woman camera narrative kanji beef noodles silent fetishism. Construct physical singularity Shibuya youtube j-pop systema papier-mache car Tokyo RAF drone post-nano-rebar geodesic. Shoes corporation pre-geodesic refrigerator Tokyo render-farm beef noodles face forwards tattoo motion uplink.
                        </p>

                        <img  src={GooglePlay}
                              style={{  width: "160px", height: "auto"}}
                              alt='AppStore'
                              />
                        <span className='ps'><img  src={AppStore} alt='GooglePlay'/></span>

                    </div>
                    <div className='column is-2'>
                        <p className='cities'>
                          <strong>Cities</strong><br/><br/>
                          <li>Bengaluru</li>
                          <li>New Delhi</li>
                          <li>Chennai</li>
                          <li>Mumbai</li>
                          <li>Lucknow</li>
                          <li>Kolkata</li>
                        </p>
                    </div>
                    <div className='column is-2'>
                        <p className='cities'>
                          <strong>About Us</strong><br/><br/>
                            <li>About Headout</li>
                            <li>Help & FAQs</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Usage</li>
                        </p>
                    </div>
                    <div className='column is-3'>
                        <p className='social'>
                          <strong>Social</strong><br/><br/>                        
                          <i className="fab fa-twitter-square fa-2x"></i>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <i className="fab fa-instagram fa-2x"></i>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <i className="fab fa-facebook fa-2x"></i>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <i className="fab fa-pinterest fa-2x"></i>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                    </div>            
                    </div>
              </div>
            </div>
            </div>
            )
    }
}

