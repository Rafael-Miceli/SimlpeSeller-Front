import React, { Component } from 'react';
import Select, { Creatable } from 'react-select';

import 'react-select/dist/react-select.css';

class Product extends Component {

  adicionarFornecedor() {
    console.log("Adicionando fornecedor");
  }

  render() {
    return (
      <div>
        Criar Produto
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="productName" id="productName" required />          
          <label className="mdl-textfield__label" htmlFor="productName">Nome</label>          
        </div>
        <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
          <input className="mdl-textfield__input" type="text" id="fornecedor" value="" readOnly tabIndex="-1" />
          <label htmlFor="fornecedor" className="mdl-textfield__label">Fornecedor</label>
          <ul htmlFor="fornecedor" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
              <li onClick={this.adicionarFornecedor} className="mdl-menu__item">Criar novo <i className="material-icons">add</i></li>
              <li className="mdl-menu__item">Forn 1</li>
              <li className="mdl-menu__item">Forn 2</li>
          </ul>
        </div>                       
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="sellingPrice" id="sellingPrice" required pattern="-?[0-9]*(\.[0-9]+)?" />          
          <label className="mdl-textfield__label" htmlFor="sellingPrice">Preço de Venda</label>       
          <span className="mdl-textfield__error">Preço de venda deve ser um número!</span>   
        </div>
        <div></div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="buyingPrice" id="buyingPrice" required pattern="-?[0-9]*(\.[0-9]+)?" />          
          <label className="mdl-textfield__label" htmlFor="buyingPrice">Preço de Compra</label>       
          <span className="mdl-textfield__error">Preço de compra deve ser um número!</span>   
        </div>
        <div>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Criar
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
