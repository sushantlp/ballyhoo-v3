import React, { Component } from 'react';
import './app.css';

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
                    <div className='column row'>
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
                </div>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Featured</h2>
                <div className='columns is-3'>
                    <div className='column row'>
                        <div className='card tile feat'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile feat'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile feat'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile feat'><span className='centered'>State</span></div>
                    </div>
                    <div className='column'>
                        <div className='card tile feat'><span className='centered'>State</span></div>
                    </div>                    
                </div>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Trending</h2>
                <div className='columns is-3'>
                    <div className='column row'>
                        <div className='card tile trending'>State</div>
                    </div>
                    <div className='column'>
                        <div className='card tile trending'>State</div>
                    </div>
                    <div className='column'> 
                        <div className='card tile trending'>State</div>
                    </div>
                    <div className='column'>
                        <div className='card tile trending'>State</div>
                    </div>                    
                </div>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Popular</h2>
                <div className='columns is-3'>
                    <div className='column row'>
                        <div className='card tile popular'>State</div>
                    </div>
                    <div className='column'>
                        <div className='card tile popular'>State</div>
                    </div>
                    <div className='column'>
                        <div className='card tile popular'>State</div>
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