import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons: [
      {name: 'Estela', age: 1},
      {name: 'Luis', age: 30},
      {name: 'Pedro', age: 60},
    ]  
  } 

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "pName", age: 1},
        {name: event.target.value, age: 30},
        {name: 'Pedrinho', age: 60},
      ]
    });
  }

  switchNameHandler = (pName) => {
    console.log('Pulsado');
    //Esto no funciona.
    //this.state.persons[1].name= 'Maximiilam';
    this.setState({
      persons: [
        {name: pName, age: 1},
        {name: 'Luisinho', age: 30},
        {name: 'Pedrinho', age: 60},
      ]
    });
  }

  render() {
    return (
      <div className='App'> 
        <button onClick={() => this.switchNameHandler('Maximiliano')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!')}
          changed={this.nameChangeHandler}>
          </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>          
    </div>
    );
  }
}

export default App;
