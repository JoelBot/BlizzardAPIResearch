import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
// import Config from '../config.js'

import Framework from '../components/Framework'
import Home from '../components/Home'


ReactDOM.render(
        <Router>
          <Route path='/' component={Framework}>
            <IndexRoute component={Home} />
          </Route>

        </Router>
    , document.getElementById('app')
)
