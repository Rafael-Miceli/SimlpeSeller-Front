import React, { Component } from 'react';
import './App.css';
import Product from './InputData/Product';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">                
        
        <div className="mdl-layout__header mdl-layout__header--waterfall">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              <h5>Nome da página</h5>
            </span>
            
            <div className="android-header-spacer mdl-layout-spacer"></div>                        
          </div>
        </div>

        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">
            <h5>Nome da Loja</h5>
          </span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Vendas do Dia</a>
            <div className="candy-drawer-separator"></div>
            <a className="mdl-navigation__link" href="">Caixa do Dia</a>
            <a className="mdl-navigation__link" href="">Movimentação</a>
            <a className="mdl-navigation__link" href="">Caixas Passados</a>
            <a className="mdl-navigation__link" href="">Produtos</a>
            <a className="mdl-navigation__link" href="">Configurações</a>           
          </nav>
        </div>
        
        <main className="mdl-layout__content">
          <Product />
        </main>        
      </div>
    );
  }
}

export default App;
