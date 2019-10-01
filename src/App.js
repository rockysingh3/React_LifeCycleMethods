import React, { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubUserInfo username="rockysingh3"/>
      </div>
    );
  }
}

export default App;
