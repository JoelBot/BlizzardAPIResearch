import React, { Component } from 'react'

class APIDump extends Component {
  constructor(props) {
    super(props)

  }
  componentWillMount() {
    console.log('Console Will Mount...')

  }
  componentDidMount() {
    fetch('https://us.api.battle.net/wow/character/fenris/tomes?locale=en_US&apikey=vp6vgjjs48wb4c567qd556e8zkvgzzwb')
    .then(response => response.json())
    .then(console.log(response))
  }
  render() {
      return  <div>
                  <div id="APIDump" className="row">
                      <div className="col-sm-12 text-center">
                          <h1>Welcome to Character Diffster!</h1>
                          <h3>You did stuff, here is the proof.!</h3>
                      </div>
                  </div>
              </div>

  }
}

export default APIDump
