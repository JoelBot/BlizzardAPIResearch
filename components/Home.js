import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
// import Nav from '../components/Nav'



class Home extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)
    this.state = {
      name: '',
      thumbnail: '',
      lastUpdated: '',
    }
  }
  componentWillMount() {
    console.log('Console Will Mount...')

  }
  componentDidMount() {
    fetch('https://us.api.battle.net/wow/character/fenris/tomes?locale=en_US&apikey=vp6vgjjs48wb4c567qd556e8zkvgzzwb')
    .then(response => response.json())
    // .then(console.log(response))
    .then(this.updateState)
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
                        <div className="col-sm-9 text-center">
                            <h2>Welcome to Character Diffster!</h2>
                            <h3>You did stuff, here is the proof: check the console -> </h3>
                          </div>
                            <div className="col-sm-3">
                              <div> <img src={this.state.thumbnail} alt="" /></div>
                              <div>  Name: {this.state.name}</div>
                              <div>  Last Updated: {this.state.lastUpdated}</div>
                          </div>
                    </div>
                </div>

    }
}

export default Home
