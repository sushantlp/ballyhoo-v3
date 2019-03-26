import React, { Component } from 'react';
import './app.css';
import Carousel from 'nuka-carousel';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <section className='navbar is-info is-warning has-text-centered'>
            <h2>BALLYHOO.TODAY</h2>
        </section>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <h1 className='title'>Ballyhoo</h1>
                <h2 className='subtitle'>Eat : Play : Discover</h2>
                <div className='columns content has-text-centered'>
                    <div className='column'>State</div>
                    <div className='column'>Locality</div>
                    <div className='column'>Offer</div>
                </div>
            </div>
        </section>

        <div>
            <section className='section'>
                <h2 className='subtitle'>Discover</h2>
                <div className='columns is-3'>
                <Carousel slidesToShow='6' slidesToScroll='1' wrapAround='true' cellAlign='center' autoGenerateStyleTag='true' slideIndex='3'>
                    <div className='column'>
                        <div className='card tile circle'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile circle'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile circle'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile circle'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile circle'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile circle'><span className='centered'>State</span></div>
                    </div>                    
                </Carousel>
                </div>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Featured</h2>
                <div class="tile is-ancestor">
                    <div class="tile is-4 is-vertical">
                        <div class="tile">
                            <div className='ui fluid card image'>
                                <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/WALK-IN/13.jpg' alt=''/>
                                <p> Text </p>
                            </div>
                        </div>
                        <div class="tile">
                            <div className='ui fluid card image'>
                                <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/WALK-IN/3.jpg' alt=''/>
                                <p> Text </p>
                            </div>
                        </div>
                    </div>
                    <div class="tile">
                        <div className='ui fluid card image centertile'>
                            <p> Text </p>
                        </div>
                    </div>                    
                    <div class="tile is-4 is-vertical">
                        <div class="tile">
                            <div className='ui fluid card image'>
                                <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/WALK-IN/2.jpg' alt=''/>
                                <p> Text </p>
                            </div>
                        </div>
                        <div class="tile">
                            <div className='ui fluid card image'>
                                <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/WALK-IN/1.jpg' alt=''/>
                                <p> Text </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Trending</h2>
                <div className='columns is-3'>
                    <div className='column row'>
                        <div className='ui fluid card image'>
                            <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/VEG/15.jpg' alt=''/>
                        </div>
                    </div>
                    <div className='column'>
                        <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/VEG/15.jpg' alt=''/>
                    </div>
                    <div className='column'> 
                        <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/VEG/15.jpg' alt=''/>
                    </div>
                    <div className='column'>
                        <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/VEG/15.jpg' alt=''/>
                    </div>                    
                </div>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Popular</h2>
                <div className='columns is-3'>
                    <div className='column'>
                        <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/VEG/5.jpg' alt=''/> 
                    </div>
                    <div className='column'>
                        <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/VEG/5.jpg' alt=''/>
                    </div>
                    <div className='column'>
                        <img src='https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/VEG/5.jpg' alt=''/>
                    </div>
                </div>
            </section>
        </div>

        <section className='footer is-dark'>
          <div class="content has-text-centered">
            <p>
              <strong>2019 Ballyhoo</strong>.
            </p>
          </div>
        </section>
      </div>
      );
  }
}

export default App;