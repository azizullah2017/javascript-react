import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

class App extends Component {
  state ={
    Persons:[
              {name:'azo', age:12},
               {name:'zoo', age:13},
               {name:'aziz ullah', age:12},
              ],
    Students: [ {age:1, name:'khan'}],
    otherstate: 'this new value'
  }


  switchhandler=() =>{
   // console.log('It is clicked');
  // this.state.Persons[0].name="aziz ullah";
  this.setState( {
    Persons:[
      {name:'aziz ullah', age:12},
      {name:'zoo', age:13},
      {name:'aziz ullah', age:12},
    ] }
  )
  }

  switchhaler2=(newName,newAge) =>{
    // console.log('It is clicked');
   // this.state.Persons[0].name="aziz ullah";
   this.setState( {
     Persons:[
       {name:newName, age:newAge},
       {name:'zoo', age:13},
       {name:'aziz ullah', age:12}
     ] }
   )
   }


   changeNamehandler=(event ) =>{
    // console.log('It is clicked');
   // this.state.Persons[0].name="aziz ullah";
   this.setState( {
     Persons:[
       {name:'aziz ullah', age:12},
       {name:'zoop', age:13},
       {name:event.target.value, age:12},
     ] }
   )
   }



  render() {

    
    const style={
      margin: 'auto',
      backgroundColor:'orange',
      border: '1px solid black',
      padding:'12px',
      cursor:'pointer'
    };
    return (
      
      <div className="App">
        
        <p className="App-intro">
          This is Boxes
        </p>
        <button style={style} onClick={this.switchhaler2.bind(this,'khan ali',12000)} > New Button</button>
        <button onClick={this.switchhandler}>switch </button> 
      
        <Person change={this.changeNamehandler} name={this.state.Persons[2].name} age={this.state.Persons[2].age} >one</Person>

        <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} >one</Person>
      { /*  This is passed the reference of handler to click property by click to paragraph change the state */}
        <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} click={this.switchhandler} >one</Person>
         

        <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} >one</Person>
        <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age} >Two</Person>
        <Person name='aziz' age='12'>one</Person>
        <Person name='aziz' age='12' >Two</Person>
       

      </div>
    );
  //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is me'));
  }
}

export default App;
