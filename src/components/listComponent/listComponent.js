import React, { Component } from 'react';

export default  class List extends Component {
    render() {
        return (
            <div className='listcontainer columns'>
                <div className='column is-3'>3</div>
                <div className='column is-6'>6</div>
                <div className='column is-3'>3</div>
            </div>
        );
    }
}
