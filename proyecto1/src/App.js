import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 1},
      {name: 'Luis', age: 30},
      {name: 'Pedro', age: 60},
    ]  
  } 

  switchNameHandler = () => {
    console.log('Pulsado');
  }

  render() {
    return (
      <div className='App'> 
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          <button onClick={this.switchNameHandler}>Switch Name</button>
    </div>
    );
  }
}

export default App;
