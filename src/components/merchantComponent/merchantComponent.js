import React, { Component } from 'react';
import './merchantComponent.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class TabSwitch extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
              <div className='d'>
                {this.props.show}
              </div>)
    }
}

export default  class Merchant extends Component {
    constructor(props){
        super(props)
        this.state={tab:'details'}
    }

    clickReviews = () =>{
        {this.setState({tab:"reviews"})}
    }

    clickDetails = () =>{
        {this.setState({tab:"details"})}
    }

    clickPackages = () =>{
        {this.setState({tab:"packages"})}
    }


    render() {
        return (
        <div className='listcontainer'>
            <div className='columns'>
                <div className='column merch_one is-8'>
                    <section style={{"marginLeft":"10px", "marginTop":"30px"}}>
                        <h2 className='subtitle'>Merchant Name</h2>
                        <nav class="breadcrumb" aria-label="breadcrumbs">
                          <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Discover</a></li>
                            <li><a href="/">Merchant list</a></li>
                            <li class="is-active">
                            <a href="/">Merchant</a></li>
                          </ul>
                        </nav>
                    </section>
                    <div>
                        <Tabs className='tabs is-right mtabs'>
                            <TabList>
                                <Tab onClick={this.clickDetails}>Details</Tab>
                                <Tab onClick={this.clickPackages}>Packages</Tab>
                                <Tab onClick={this.clickReviews}>Reviews</Tab>
                            </TabList>
                        </Tabs>
                    </div>                    
                    <TabSwitch show={this.state.tab}/>
               </div>
                <div className='column three is-3'><br/><br/>
                    <p style={{"fontSize":"0.8em"}}>Kowloon fluidity math--ware human-space semiotics tanto pistol corporation bicycle grenade realism camera hotdog.<br/><br/></p>
                    <img src='http://bit.ly/2FAhVbn' alt='alt'/>
                    <p>Similar Title</p>
                    <p style={{"fontSize":"0.8em"}}>Offer Title<br/></p>
                    <hr/>
                    <p style={{"fontSize":"0.8em"}}>Sunglasses math-corrupted A.I. nano-neon rifle.<br/><br/> Jeans sensory apophenia urban claymore mine fluidity sprawl San Francisco convenience store.<br/><br/> J-pop meta-refrigerator sprawl shoes soul-delay hotdog tiger-team girl drone systema systemic rifle industrial grade singularity ablative.<br/><br/> Pre-bicycle modem 8-bit receding beef noodles vinyl smart-systemic footage realism boy.<br/><br/> Denim jeans semiotics man office sentient Legba warehouse 3D-printed engine monofilament artisanal nodal point apophenia tower courier. Offer Title<br/><br/></p>
                     <img src='http://bit.ly/2OYxu10' alt='alt'/>
                    <p>Similar Title</p>
                    <p style={{"fontSize":"0.8em"}}>Offer Title<br/></p>
                    <hr/>
                </div>
            </div>
            <br/>
        </div>
        );
    }
}