import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Dave', age: 61},
      {name: 'Sob', age: 60},
      {name: 'Misty', age: 187}
    ]
  }

  switchNameHandler = () => {
    //onsole.log("Was Clicked.");
    // DON'T DO THIS this.state.persons[0].name = "David";
    this.setState({persons: [
        {name: 'David', age: 61},
        {name: 'Sob', age: 60},
        {name: 'Misty', age: 188}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby: Birding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
