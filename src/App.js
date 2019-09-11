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

  switchNameHandler = (newName) => {
    //onsole.log("Was Clicked.");
    // DON'T DO THIS this.state.persons[0].name = "David";
    this.setState({persons: [
        {name: newName, age: 61},
        {name: 'Sob', age: 60},
        {name: 'Misty', age: 188}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: "Max", age: 26},
      {name: event.target.value, age: 27},
      {name: "Steph", age: 28}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React app.</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("David!")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Big Guy")}
          changed={this.nameChangedHandler}>
        My Hobby: Birding</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
