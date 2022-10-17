//startup point for client side application
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import Routes from './Routes'


//client side routing
ReactDOM.hydrate(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    ,document.querySelector('#root')) //render also works but shows warning

