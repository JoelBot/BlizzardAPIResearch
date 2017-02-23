import React from 'react'

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
}
