import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './InputData/Product';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">        
        <header className="mdl-layout__header">                              
          {/*<button id="demo-menu-lower-left" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">more_vert</i>
          </button>

          <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" for="demo-menu-lower-left">
            <li className="mdl-menu__item">Some Action</li>
            <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>
            <li disabled className="mdl-menu__item">Disabled Action</li>
            <li className="mdl-menu__item">Yet Another Action</li>
          </ul>*/}
          <div className="mdl-layout-spacer"></div>          
          <div className="md-layout__header-row mdl-typography--text-center">            
            <span className="mdl-layout-title">Nome da Loja</span>            
          </div>
          <div className="mdl-layout-spacer"></div>
        </header>
        <main className="mdl-layout__content">
          <Product />
        </main>        
      </div>
    );
  }
}

export default App;
