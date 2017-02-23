import React, { Component } from 'react'
import { Link } from 'react-router'
// import Nav from '../components/Nav'



class Home extends Component {
  constructor(props) {
    super(props)

  }
  componentWillMount() {
    console.log('Console Will Mount...')

  }
  componentDidMount() {
    fetch('https://us.api.battle.net/wow/character/fenris/tomes?locale=en_US&apikey=vp6vgjjs48wb4c567qd556e8zkvgzzwb')
    .then(response => response.json())
    .then(response => console.log(response))
  }

    render() {
        return  <div>
                    <div id="homePage" className="row">
                        <div className="col-sm-12 text-center">
                            <h1>Welcome to Character Diffster!</h1>
                            <h3>You did stuff, here is the proof: check the console -></h3>
                        </div>
                    </div>
                </div>

    }
}

export default Home
