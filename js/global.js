import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from '../components/Home'
import TestDump from '../components/TestAPIDump'

ReactDOM.render(
        <Router>
          <Route path='/' component={Home} />
          <Route path="/APIDump" component={TestDump} />

        </Router>
    , document.getElementById('app')
)
