import React, { Component } from 'react'
// import config from '../config'
import { Link } from 'react-router'
import moment from 'moment'



class Home extends Component {
  constructor(props) {
    super(props)
    this.typing = this.typing.bind(this)
    this.enter = this.enter.bind(this)

    this.state = {
      name: '',
      serverName: 'fenris',
      api: 'https://us.api.battle.net/wow/character/',
      locale: '?locale=en_US',
      thumbnail: '',
      lastUpdated: ''

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

          fetch(this.state.api + this.state.serverName + '/' + this.state.name + this.state.locale +'&apikey=vp6vgjjs48wb4c567qd556e8zkvgzzwb')
          .then(response => response.json())
          .then(response => this.setState({
          thumbnail: 'http://render-api-us.worldofwarcraft.com/static-render/us/' + response.thumbnail,
          // format http://render-api-us.worldofwarcraft.com/static-render/us/fenris/44/129984556-profilemain.jpg
          lastUpdated: moment(response.lastModified).fromNow()
      }))
    }
  }

    render() {
        return  <div>
                    <div id="homePage" className="row">
                        <div className="col-sm-12 text-center">
                            <h1>Welcome to Character Diffster!</h1>
                              <br />
                              <br />
                            <div className="col-sm-2">
                              <label htmlFor="charName">Character Name:</label>
                              {/* <span> </span> */}
                              <input type="text" id="charName" placeholder="Fabulon" value={this.state.name} onChange={this.typing} onKeyPress={this.enter}></input>
                            </div>
                            <div className="col-sm-10">
                              <img src={this.state.thumbnail} alt="" />
                              <div>  Name: {this.state.name}</div>
                              <div>  Last Updated: {this.state.lastUpdated}</div>
                            </div>
                        </div>
                    </div>
                </div>

    }
}

export default Home
