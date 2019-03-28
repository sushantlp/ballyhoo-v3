import React, { Component } from 'react';
import './app.css';
import SlideCard from './components/featCardComponent/featCardComponent'
import Carousel from './components/discoverComponent/discoverComponent'
class App extends Component {

    dicover_items = [
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://bit.ly/2U2yExZ' alt='alt'/>,
        <img src='https://bit.ly/2OwcNt6' alt='alt'/>
    ]

    featured_items = [
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>,
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>,
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>,
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>,
        <SlideCard img='https://bit.ly/2OwcNt6' alt='alt'/>
    ]

    trend_items = [
        <img src='https://bit.ly/2V1OEg7' alt='alt' />,
        <img src='https://bit.ly/2V1OEg7' alt='alt' />,
        <img src='https://bit.ly/2V1OEg7' alt='alt' />,
        <img src='https://bit.ly/2V1OEg7' alt='alt' />,
        <img src='https://bit.ly/2V1OEg7' alt='alt' />
    ]

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
                <Carousel items={this.dicover_items} style txt='Discover'/>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Featured</h2>
                <Carousel items={this.featured_items} lift/>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Trending</h2>
                <Carousel items={this.trend_items} style txt='Trending'/>
            </section>
            <section className='section'>
                <h2 className='subtitle'>Popular</h2>
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

