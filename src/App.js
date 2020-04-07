import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    name: 'Mubarak Ali',
  }

  nameChangeHandler = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    const styleH1 = {
      textAlign: 'center',
      color: 'salmond',
    }
    return (
      <div className='App'>
        <h1 style={styleH1}>Optional Assignment Solution</h1>
        <UserInput changed={this.nameChangeHandler} userName={this.state.name} />
        <div className='Body'>
          <UserOutput userName={this.state.name} />
          <UserOutput userName='Stephanie' />
          <UserOutput userName='Maximilian' />
        </div>
      </div>
    );
  }
}

export default App;
