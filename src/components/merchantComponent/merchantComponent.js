import React, { Component } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './merchantComponent.css';


class Details extends Component{
    render(){
        const style = {
          backgroundImage: "url("+this.props.image+")",
          backgroundSize: "cover"
        }

        return(
            <div className='tabcontent'>
                <h2 className='subtitle'>Details</h2>
                <div style={style} className='detailimg columns is-mobile' alt='alt'>
                  <div className='hostext column is-11'>
                      <span>
                        Merchant Name, Location <br/>
                      </span>
                  </div>
                </div>
                <div className='columns'>
                    <div className='overview column is-3'>
                        <Popularity pop='57%'/>&nbsp;
                        <Rating />
                        <Ftype/>
                        <div className='tag is-primary'>
                            <p>
                                Cuisine: Continental
                            </p>
                        </div>
                        <div className='tag is-success'>
                            <p>
                                <i class="fas fa-rupee-sign"></i> 1000 onwards
                            </p>
                        </div>
                    </div>
                    <div className='highlights column'>
                        <p><strong>Offer Highlights</strong>: Neon savant knife-space engine Kowloon katana saturation point realism boy Chiba towards. Carbon concrete RAF drugs convenience store assault katana Chiba assassin systema market film. 3D-printed footage tube-space drugs otaku faded DIY man rifle. Convenience store girl warehouse plastic paranoid physical wonton soup boat chrome advert tattoo long-chain hydrocarbons sub-orbital city spook jeans digital. </p>
                    </div>
                </div>
            </div>
            )
    }
}
class Popularity extends Component {
    render(){
        return (
            <div className='tag is-dark'>
                Popularity:&nbsp;
                <img    src='http://bit.ly/2IctxVB' 
                        alt='popularity' />&nbsp;{this.props.pop}
            </div>
            )        
    }
}
class Ftype extends Component {
    render(){
        return (
            <div className='tag is-'>
                Food Type: &nbsp;
                <img    src='http://bit.ly/2I8F88f' 
                        alt='herb'/>
                <img src='http://bit.ly/2WZDWYo' alt='carn'/>
            </div>
            )        
    }
}
class Rating extends Component{
    render(){
        return (
            <div className='tag is-warning'>
                Rating: &nbsp;
                    <p   
                        className='tag is-warning column'>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </p>                        
            </div>
            )        
    }
}
class Packages extends Component{
    render(){
        return(
            <div className='tabcontent'>
                <h2 className='subtitle'>Packages</h2>
                <div className='columns is-mobile'>
                    <div className='column'>
                        Platinum
                        <span>
                        Uplink-space soul-delay boy drone warehouse tube camera tower faded dolphin chrome spook. Geodesic tube corrupted pre-urban beef noodles A.I. stimulate motion tanto cyber-sprawl. Tokyo Legba free-market systema pistol receding disposable sunglasses grenade smart-San Francisco. Sensory fetishism artisanal beef noodles ablative silent voodoo god wristwatch futurity BASE jump sub-orbital vehicle. Numinous-space cardboard semiotics singularity systema meta-pistol ablative fetishism realism faded military-grade assassin camera. 
                        </span>
                    </div>
                    <div className='column' style={{"background":"yellow"}}>
                        Gold
                        <span>
                        Uplink-space soul-delay boy drone warehouse tube camera tower faded dolphin chrome spook. Geodesic tube corrupted pre-urban beef noodles A.I. stimulate motion tanto cyber-sprawl. Tokyo Legba free-market systema pistol receding disposable sunglasses grenade smart-San Francisco. Sensory fetishism artisanal beef noodles ablative silent voodoo god wristwatch futurity BASE jump sub-orbital vehicle. Numinous-space cardboard semiotics singularity systema meta-pistol ablative fetishism realism faded military-grade assassin camera. 
                        </span>
                    </div>
                    <div className='column'>
                        <span>
                        Uplink-space soul-delay boy drone warehouse tube camera tower faded dolphin chrome spook. Geodesic tube corrupted pre-urban beef noodles A.I. stimulate motion tanto cyber-sprawl. Tokyo Legba free-market systema pistol receding disposable sunglasses grenade smart-San Francisco. Sensory fetishism artisanal beef noodles ablative silent voodoo god wristwatch futurity BASE jump sub-orbital vehicle. Numinous-space cardboard semiotics singularity systema meta-pistol ablative fetishism realism faded military-grade assassin camera. 
                        </span>
                        Silver
                    </div>
                </div>
            </div>
        )
    }
}
class Reviews extends Component{
    render(){
        return(
            <div className='tabcontent'>
                <h2 className='subtitle'>Reviews</h2>
            </div>
            )
    }
}
class TabSwitch extends Component{
    render(){
                switch(this.props.show)
                {
                    case 'details':
                        return <Details image={'http://bit.ly/2IbEzdK'}/>
                    case 'packages':
                        return <Packages />
                    case 'reviews':
                        return <Reviews />
                    default:
                        return <Details />
                } 
            }
}

export default  class Merchant extends Component {
    constructor(props){
        super(props)
        this.state={tab:'details'}
    }

    clickReviews = () => {
        this.setState({tab:"reviews"});
    }

    clickDetails = () => {
        this.setState({tab:"details"});
    }

    clickPackages = () =>{
        this.setState({tab:"packages"});
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
                    <img src='http://bit.ly/2FAhVbn' width={265} alt='alt'/>
                    <p>Similar Title</p>
                    <p style={{"fontSize":"0.8em"}}>Offer Title<br/></p>
                    <hr/>
                    <p style={{"fontSize":"0.8em"}}>Sunglasses math-corrupted A.I. nano-neon rifle.<br/><br/> Jeans sensory apophenia urban claymore mine fluidity sprawl San Francisco convenience store.<br/><br/> J-pop meta-refrigerator sprawl shoes soul-delay hotdog tiger-team girl drone systema systemic rifle industrial grade singularity ablative.<br/><br/> Pre-bicycle modem 8-bit receding beef noodles vinyl smart-systemic footage realism boy.<br/><br/> Denim jeans semiotics man office sentient Legba warehouse 3D-printed engine monofilament artisanal nodal point apophenia tower courier. Offer Title<br/><br/></p>
                     <img src='http://bit.ly/2OYxu10' width={265} alt='alt'/>
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