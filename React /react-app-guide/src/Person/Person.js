import React from 'react';
import './Person.css';



const person= (props) => {
    return (
       
    <div className="Person">
        
        ID: {props.children} 
        <p onClick={props.click}> Name : {props.name} </p> 
        <p> Age : {props.age} </p>
        <p> This person Id number : {Math.floor(Math.random()*10)} </p> 
        <input onChange={props.change}/>
        <input onChange={props.change} value={props.name}/>
    </div>
    )};

export default person;