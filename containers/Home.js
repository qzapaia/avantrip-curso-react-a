import React, { Component } from 'react';
import Test from '../components/Test';
import TestContainer from './Test';

export default class extends Component {
  constructor(){
    super();
    this.callGithub = this.callGithub.bind(this);
    this.state = {
      repos:[]
    }
  }
  callGithub(){
    fetch('https://api.github.com/users/qzapaia/repos')
      .then(res=>res.json())
      .then(repos=>this.setState({
        repos
      }))
  }
  render() {
    return <div>
      <div>
        <Test title='Hola'
              onClick={this.callGithub}
              list={this.state.repos}
              child={<TestContainer />}
               />
      </div>
    </div>;
  }
}
