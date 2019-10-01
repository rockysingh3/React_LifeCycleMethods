import React, { Component } from 'react';
import axios from 'axios'

class GithubUserInfo extends Component {

  constructor(props) {
    super(props)
    this.state = { imgUrl: '', name: '' }
  }

  // this gets called after first time render is called
  async componentDidMount() {
    const URL = `https://api.github.com/users/${this.props.username}`
    let response = await axios.get(URL)
    let data = response.data;
    this.setState({ imgUrl: data.avatar_url, name: data.name })
  }


  render() {
    return (
      <div>
        <h1>Github User Info: {this.state.name}</h1>
        <img src={this.state.imgUrl}></img>
      </div>
    );
  }
}

export default GithubUserInfo;