import React from 'react';
import './navbarComponent.css'

export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className='navbar has-text-centered columns'>
                    <div className='brandname column'>
                        <h1>BALLYHOO</h1>
                    </div>
                    <div className='nav_searchbar column is-5'>
                       <select className='nav_dropdown'>{this.props.options}</select>
                       &nbsp;
                       <input  type="text" className='nav_search' placeholder='search' required/>
                    </div>
                    <div className='column'>
                        <i class="fa fa-user-circle"><p className='nav_text'>Sign in</p></i>
                    </div>
                </div>
                <div className='nav_menu columns'>
                    <div className='column'/>
                    <div className='column is-5 has-text-centered'>
                        <p className='nav_menu_text'>Menu</p>       
                        <p className='nav_menu_text'>Discover</p>       
                        <p className='nav_menu_text'>Featured</p>       
                        <p className='nav_menu_text'>Popular</p>       
                        <p className='nav_menu_text'>Trending</p>
                        <p className='nav_menu_text'>Download App</p>
                    </div>
                    <div className='column'/>
                </div>
            </div>
            )
    }
}

