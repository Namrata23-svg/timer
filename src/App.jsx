import React,{Component} from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    count:0,
    }
  }

    increment=()=>{
      this.setState((prevState)=>({
        count:prevState.count+1,
      }))
    };
    decrement=()=>{
      if(this.state.count<0){
        this.setState({
          count:0,
        })
      }
      else{
        this.setState({
          count:prevState.count-1,
        })
      }
        
    };
    reset=()=>{
      this.setState({
     count:0,
      })
    }
        

    

  render () {
    return(
    
    <div>
      <Home/>
      <h1>Count:{this.state.count}</h1>
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
      <button onClick={this.reset}>REset</button>
    </div>
    );
  }}

export default App;
