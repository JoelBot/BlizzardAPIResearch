import React, { Component } from 'react'
import config from '../config.js'
import { Link } from 'react-router'
// import Nav from '../components/Nav'



class Home extends Component {
  constructor(props) {
    super(props)
    this.typing = this.typing.bind(this)
    this.enter = this.enter.bind(this)
    this.state = {
      name: '',
      serverName: 'fenris',
      api: 'https://us.api.battle.net/wow/character/',
      key: '?locale=en_US&apikey='
    }
  }
  componentWillMount() {
    console.log('Console Will Mount...') 

  }
  componentDidMount() {

  }
typing (e) {
  this.setState({
    name: e.target.value
  })
}
  enter(e) {
    if (e.key === 'Enter') {
          fetch(this.state.api + this.state.serverName + '/' + this.state.name + this.state.key + MY_KEY)
          .then(response => response.json())
          .then(response => console.log(response))
    }
  }
    render() {
        return  <div>
                    <div id="homePage" className="row">
                        <div className="col-sm-12 text-center">
                            <h1>Welcome to Character Diffster!</h1>
                              <br />
                              <br />
                            <label htmlFor="charName">Character Name:</label>
                            <span> </span>
                            <input type="text" id="charName" placeholder="Fabulon" value={this.state.name} onChange={this.typing} onKeyPress={this.enter}></input>
                        </div>
                    </div>
                </div>

    }
}

export default Home
