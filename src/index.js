import React from 'react'
import ReactDOM from 'react-dom'
//1.4 import Component App.js (Lanjut ke line 9)
import App from './App'

/*6. (OPTIONAL) Pulling in API Data
6.1 gather data form URL endpoint in Api.js
(lanjut ke Api.js line 1)

import App from './Api'

*/
import './index.css'
import * as serviceWorker from './serviceWorker'


//1.5 App.js dirender kedalam root (public/index.html) (SELESAI)
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();