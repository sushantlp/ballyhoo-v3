import React from 'react';
import './searchComponent.css'

export default class Search extends React.Component{
    render()
    {
        if(this.props.dd)
            return( <div className='ddcon'>
                        <i className="ddicon fas fa-map-marker-alt"></i>
                        <select className='dropdown'>{this.props.options}</select> 
                    </div>
                )

        return <input type="text" placeholder={this.props.ph} required className='search'/>
    }
}