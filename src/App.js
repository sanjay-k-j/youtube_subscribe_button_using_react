
import './App.css'
import NewComp from './component/NewComp';
import React from 'react';
// import NewComp from './component/NewComp';

class App extends React.Component{
  style = {
    fontStyle: 'bold',
    color : 'teal'
  };
  render() {
    return (
    <div className='App'>
      <h1 style={this.style}>welcome</h1>
      <NewComp />
    </div>
    );
  }
}

export default App;
