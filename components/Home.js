import React, { Component } from 'react'
import Config from '../config.js'
import { Link } from 'react-router'
import moment from 'moment'



class Home extends Component {
  constructor(props) {
    super(props)
    this.typing = this.typing.bind(this)
    this.enter = this.enter.bind(this)
    this.updateState = this.updateState.bind(this)
    this.state = {
      name: '',
      serverName: 'fenris',
      api: 'https://us.api.battle.net/wow/character/',
      key: '?locale=en_US&apikey=',
      thumbnail: '',
      lastUpdated: ''

    }
  }
  componentWillMount() {
    console.log('Console Will Mount...') 
    console.log(config.MY_KEY)

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

      var mykey = Config.MY_KEY
          fetch(this.state.api + this.state.serverName + '/' + this.state.name + this.state.key + mykey)
          .then(response => response.json())
          .then(response => updateState(response))
    }
  }

  updateState(response) {

    console.log(response)
    console.log("hello")
      this.setState({
          name: response.name,
          thumbnail: 'http://render-api-us.worldofwarcraft.com/static-render/us/' + response.thumbnail,
          // http://render-api-us.worldofwarcraft.com/static-render/us/fenris/44/129984556-profilemain.jpg
          lastUpdated: moment(response.lastModified).fromNow()
      })

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
                              
                              <div> <img src={this.state.thumbnail} alt="" /></div>
                              <div>  Name: {this.state.name}</div>
                              <div>  Last Updated: {this.state.lastUpdated}</div>

                        </div>

                    </div>
                </div>

    }
}

export default Home
