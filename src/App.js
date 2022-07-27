import React, { Component } from 'react';
import pato from './img/pato.png';
import "./APP.css";


export default class App extends Component{

  state = {
    numero: 0,
    resultado: '',
  }
  

  incremento = () => {
    if(this.state.numero < 10){
      this.setState({
        numero: this.state.numero + 1,
      })
    }
  }

  decremento = () => {
    if(this.state.numero > 0 ){
      this.setState({
        numero: this.state.numero - 1
      })
    }
  }
  imgPato = () =>{
    this.setState({
      resultado: this.state.numero * 2
    })
  }
  

  
  render(){
    return(
      <section class='box'>
        <div class='box-inf'>
          <h1>Contador</h1>
          <button class='btn' onClick={this.incremento} >+</button>
          <h2>{this.state.numero}</h2>
          <button class='btn' onClick={this.decremento}>-</button>
          
        </div>

      </section>
    
    )
  }

}