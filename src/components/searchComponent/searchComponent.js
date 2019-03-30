import React from 'react';
import './searchComponent.css'

export default class Search extends React.Component{
    locality_options = [
        <option value="Bengaluru">Bengaluru</option>,
        <option value="Chennai">Chennai</option>,
        <option value="Kolkata">Kolkata</option>,
        <option value="New Delhi">New Delhi</option>,
        <option value="Lucknow">Lucknow</option>
    ]

    render()
    {
        if(this.props.dd)
            return( 
                    <div className='ddcon'>
                        <i className="ddicon fas fa-map-marker-alt"></i>
                        <select className='dropdown'>{this.locality_options}</select> 
                    </div>
                )
        return (
            <div className='searchcon'>
                <i className="sicon fas fa-search"></i>
                <input type="text" className='search' placeholder={this.props.ph} required/>
            </div>
        )
    }
}