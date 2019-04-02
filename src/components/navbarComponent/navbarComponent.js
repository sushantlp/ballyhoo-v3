import React from 'react';
import './navbarComponent.css'

export default class Navbar extends React.Component{
    showmenu = () =>{
        
    }

    render()
    {
        const locations = this.props.options.map((name,i) =>{
            return(<option value={name} key={i}>{name}</option>)
        })

        return(
            <div>
                <div className='navbar has-text-centered columns is-mobile'>
                    <div className='brandname column is-1'>
                        <h1>BALLYHOO</h1>
                    </div>
                    <div className='nav_searchbar column'>
                       <select className='nav_dropdown'>
                            {locations}
                        </select>
                       &nbsp;
                       <input  type="text" className='nav_search' placeholder='search' required/>
                    </div>
                    <div className='column is-1 signin'>
                        <i className="fa fa-user-circle"></i>
                        <p className='nav_text'>Sign in</p>
                    </div>
                    <div className='column is-1 hamburger'>
                        <a href={this.showmenu} class="icon" onclick="myFunction()">
                            <i class="fa fa-bars"></i>                        
                        </a>
                    </div>
                </div>
            </div>
            )
    }
}

