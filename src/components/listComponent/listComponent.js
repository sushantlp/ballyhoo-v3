import React, { Component } from 'react';
import './listComponent.css'

import Carousel from '../carouselComponent/carouselComponent'

import { Link } from "react-router-dom";

export default  class List extends Component {
    images = [
        'http://bit.ly/2U4qwwZ',
        'http://bit.ly/2U0MtNs',
        'http://bit.ly/2FAUIGc',
        'http://bit.ly/2FzZmnM',
        'http://bit.ly/2FA5xIy',
        'http://bit.ly/2U0MtNs',
        'http://bit.ly/2FAUIGc',
        'http://bit.ly/2FzZmnM',
        'http://bit.ly/2FA5xIy'
    ]

    featured_items = [
        <img src='http://bit.ly/2U4qwwZ' alt='alt'/>,
        <img src='http://bit.ly/2U0MtNs' alt='alt'/>,
        <img src='http://bit.ly/2FAUIGc' alt='alt'/>,
        <img src='http://bit.ly/2FzZmnM' alt='alt'/>,
        <img src='http://bit.ly/2FA5xIy' alt='alt'/>
    ]

    render() {
        return (
            <div className='listcontainer'>
            <div className='columns'>
                <div className='column two is-8'>
                    <section style={{"marginLeft":"10px", "marginTop":"30px"}}>
                        <h2 className='subtitle'>Merchant List</h2>
                        <nav class="breadcrumb" aria-label="breadcrumbs">
                          <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Discover</a></li>
                            <li class="is-active"><a href="/">Merchants</a></li>
                          </ul>
                        </nav>
                    </section>

                    {this.images.map((i)=> 
                        <div className='card mcard cardinline'>                            
                            <img src={i} width={265} alt='alt' />
                            <p style={{"float":"right","fontSize":"0.6em"}} className='tag is-warning'>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half"></i>
                            </p>
                            <Link>
                                <p>&nbsp;Merchant</p> 
                                <p style={{"fontSize":"0.8em"}}>&nbsp;Locality<br/></p>
                                <p style={{"fontSize":"0.8em"}}>&nbsp;Offer Title<br/></p>
                            </Link>
                            <div className='hashtags'>
                                <p style={{"fontSize":"0.6em"}} className='hashtag tag is-info'>#Hashtag</p>
                                <p style={{"fontSize":"0.6em"}} className='hashtag tag is-info'>#Hashtag</p>
                                <p style={{"fontSize":"0.6em"}} className='hashtag tag is-info'>#Hashtag</p>
                                <p style={{"fontSize":"0.6em"}} className='hashtag tag is-info'>#Hashtag</p>
                                <br/><hr/>
                            </div>
                            <div className='pnb'>
                                <p style={{"float":"right"}}>
                                    <i class="fas fa-rupee-sign"></i> 1000 onwards
                                </p>
                                <button className='tag is-danger'>BOOK</button>
                            </div>
                        </div>
                    )}
               </div>
                <div className='column three is-3'><br/><br/>
                    <p style={{"fontSize":"0.8em"}}>Kowloon fluidity math--ware human-space semiotics tanto pistol corporation bicycle grenade realism camera hotdog.<br/><br/></p>
                    <img src='http://bit.ly/2FAhVbn' alt='alt'/>
                    <p>Similar Title</p>
                    <p style={{"fontSize":"0.8em"}}>Offer Title<br/></p>
                    <hr/>
                    <p style={{"fontSize":"0.8em"}}>Sunglasses math-corrupted A.I. nano-neon rifle.<br/><br/> Jeans sensory apophenia urban claymore mine fluidity sprawl San Francisco convenience store.<br/><br/> J-pop meta-refrigerator sprawl shoes soul-delay hotdog tiger-team girl drone systema systemic rifle industrial grade singularity ablative.<br/><br/> Pre-bicycle modem 8-bit receding beef noodles vinyl smart-systemic footage realism boy.<br/><br/> Denim jeans semiotics man office sentient Legba warehouse 3D-printed engine monofilament artisanal nodal point apophenia tower courier. Offer Title<br/><br/></p>
                     <img src='http://bit.ly/2OYxu10' alt='alt'/>
                    <p>Similar Title</p>
                    <p style={{"fontSize":"0.8em"}}>Offer Title<br/></p>
                    <hr/>
                </div>
            </div>
            <Carousel items={this.featured_items} style list txt='Stories' className='carousel_container'/>
            <br/>
        </div>
        );
    }
}