import React from 'react';
import './searchComponent.css'


export default class Search extends React.Component{
    render(){

        return(
            <input type="text" placeholder={this.props.ph} required className='search'/>
        )
    }
}