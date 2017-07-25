import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from '../components/Home'
import Config from '../config.js'

ReactDOM.render(
        <Router>
          <Route path='/' component={Home} />

        </Router>
    , document.getElementById('app')
)
