import React from 'react';
import './searchComponent.css'

export default class Search extends React.Component{
    render()
    {
        if(this.props.dd){
            const locations = this.props.options.map((name,i) =>{
                return(<option value={name} key={i}>{name}</option>)
            })

            return( 
                    <div className='ddcon'>
                        <i className="ddicon fas fa-map-marker-alt"></i>
                        <select className='dropdown'>{locations}</select> 
                        
                    </div>
                )
        }
        return (
            <div className='searchcon'>
                <i className="sicon fas fa-search"></i>
                <input type="text" className='search' placeholder={this.props.ph} required/>
            </div>
        )
    }
}