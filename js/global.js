import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from '../components/Home'
import TestDump from '../components/TestAPIDump'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path={path + "/"} component={Home} />
        // <Route path={path + "/dump"} component={TestDump} />
        // <Route path={path + "/signup"} component={Signup} />
        // <Route path={path + "/signin"} component={Signin} />
        // <Route path={path + "/myprofile"} component={MyProfile} />
    </Router>
    ,document.getElementById('homePage')
)
