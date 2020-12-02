import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'

const App = props => {
  const [personState, setPersonState] = useState( {
    person: [
      { name: "John", age: 20 },
      { name: "Jane", age: 21 },
      { name: "Mary", age: 24 },
      { name: "Marco", age: 25 },
      { name: "Bob", age: 27 },
      { name: "Brie", age: 28 },
    ]
  } )

  const [testState, setTestState] = useState([
    'Basketball','Bowling','Soccer','American Football','Volleyball','Table Tennis'
  ])

  console.log(personState,testState)

  const switchNameHandler = (newName) => {
    // console.log("Click!!")
    //DONT DO THIS this.state.person[0] = "Rennee"
    setPersonState( { 
      person: [
        { name: newName, age: 20 },
        { name: "Jane", age: 21 },
        { name: "Mary", age: 24 },
        { name: "Marco", age: 25 },
        { name: "Bob", age: 27 },
        { name: "Brie", age: 28 },
      ]
    } )
  }
  const nameChangeHandler = (event) => {
    setPersonState({
      person: [
        { name: "John", age: 20 },
        { name: "Jane", age: 21 },
        { name: "Mary", age: 24 },
        { name: "Marco", age: 25 },
        { name: "Bob", age: 27 },
        { name: event.target.value, age: 28 },
      ]
    })
  }

  const style = {
    backgroundColor: '#008080',
    font: 'inherit',
    border: '1px solid #ccc',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
  }
    // return React.createElement('div',null,'h1','Hi, i\'m a React Application') THIS DOES NOT RETURN H1 AS ELEMENT
    //{className: 'App'} is used to implement the CSS
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hello, i\'m a React Application'))
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>It works now bb</p>
        <button style={style} onClick={switchNameHandler.bind(this,"Espada")}> Clickity Giggity </button>
        <Person name={personState.person[0].name} age={personState.person[0].age} click={switchNameHandler.bind(this,"Nevada")}></Person>    
        <Person name={personState.person[1].name} age={personState.person[1].age} click={() => {switchNameHandler('Jeez')}}></Person>    
        <Person name={personState.person[2].name} age={personState.person[2].age}></Person>    
        <Person name={personState.person[3].name} age={personState.person[3].age}></Person>    
        <Person name={personState.person[4].name} age={personState.person[4].age}></Person>    
        <Person name={personState.person[5].name} age={personState.person[5].age} changed={nameChangeHandler}></Person>    
      </div>
    );
}

export default App;
