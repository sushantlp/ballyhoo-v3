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

                <div className='column is-2'>3</div>
                <div className='column is-8'>
                <h2 className='subtitle'>Merchant List</h2>
                
                    {this.items.map((i)=> 
                        <div className='card carcard cardinline'>{i}
                            <p>&nbsp;Hello</p>
                            <p className='tag is-warning'>Rating: 5.5</p>

                        </div>
                    )}
                </div>
                <div className='column is-2'>3</div>
            </div>
        );
    }
}
