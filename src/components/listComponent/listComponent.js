import React, { Component } from 'react';
import './listComponent.css'
import { Link } from "react-router-dom";

export default  class List extends Component {
    images = [
        'http://bit.ly/2U4qwwZ',
        'http://bit.ly/2U0MtNs',
        'http://bit.ly/2FAUIGc',
        'http://bit.ly/2FzZmnM',
        'http://bit.ly/2FA5xIy',
        'http://bit.ly/2U4qwwZ',
        'http://bit.ly/2U0MtNs',
        'http://bit.ly/2FAUIGc',
        'http://bit.ly/2FzZmnM',
        'http://bit.ly/2FA5xIy'
    ]

    render() {
        return (
            <div className='listcontainer columns'>
                <div className='column is-2'>
                </div>
                
                <div style={{"marginLeft":"15px"}} className='column is-8'>
                    <section style={{"marginLeft":"10px"}}>
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
                                    <p style={{"float":"right"}}>Price:&nbsp;
                                        <i class="fas fa-rupee-sign"></i> 1000 onwards
                                    </p>
                                    <button className='tag is-danger'>BOOK</button>
                                </div>
                        </div>
                    )}
                </div>
                <div className='column is-2'>
                </div>
            </div>
        );
    }
}
