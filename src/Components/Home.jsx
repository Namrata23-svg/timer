import React,{Component} from 'react'
import { useState } from 'react'



class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
    seconds:0,
    }
  }

 
componentDidMount=()=>{
   setInterval(()=>{
    this.setState((prevState)=>({
        seconds:prevState.seconds+1,
    }))
 },4000)
}
  render(){
    return(
<div>
    Seconds:{this.state.seconds}
</div>

    )
  }}
  export default Home;