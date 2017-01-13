import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './InputData/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h2>Nome da Loja</h2>
        </header>
        <div className="container">
          <Product />
        </div>        
      </div>
    );
  }
}

export default App;
