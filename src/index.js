import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

//HOT RELOADING - - DO NOT REMOVE
//https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642

if(module.hot){
    module.hot.accept('./app', ()=> {
        const NextApp = require('./app').default
        ReactDOM.render(<NextApp />, document.getElementById('root'))
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
