import React, { Component } from 'react';
import './listComponent.css'


export default  class List extends Component {
    items = [
        <img src='http://bit.ly/2U4qwwZ' width={265} alt='alt'/>,
        <img src='http://bit.ly/2U0MtNs' width={265} alt='alt'/>,
        <img src='http://bit.ly/2FAUIGc' width={265} alt='alt'/>,
        <img src='http://bit.ly/2FzZmnM' width={265} alt='alt'/>,
        <img src='http://bit.ly/2FA5xIy' width={265} alt='alt'/>,
        <img src='http://bit.ly/2U4qwwZ' width={265} alt='alt'/>,
        <img src='http://bit.ly/2U0MtNs' width={265} alt='alt'/>,
        <img src='http://bit.ly/2FAUIGc' width={265} alt='alt'/>,
        <img src='http://bit.ly/2FzZmnM' width={265} alt='alt'/>,
        <img src='http://bit.ly/2FA5xIy' width={265} alt='alt'/>
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
                    {this.items.map((i)=> 
                        <div className='card mcard cardinline'>{i}
                            <p>&nbsp;Merchant</p>
                            <p style={{"fontSize":"0.8em"}}>&nbsp;Locality<br/></p>
                            <p style={{"fontSize":"0.8em"}}>&nbsp;Info<br/></p>
                            <p style={{"fontSize":"0.6em"}} className='hashtag tag is-info'>#Hashtag</p>
                            <p style={{"fontSize":"0.6em"}} className='hashtag tag is-info'>#Hashtag</p>
                            <p style={{"fontSize":"0.6em"}} className='hashtag tag is-info'>#Hashtag</p><br/>
                            <p style={{"fontSize":"0.6em"}} className='tag is-warning'>Rating: 5.5</p>

                        </div>
                    )}
                </div>
                <div className='column is-2'>
                </div>
            </div>
        );
    }
}
