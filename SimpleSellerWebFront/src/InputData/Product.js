import React, { Component } from 'react';
import Select, { Creatable } from 'react-select';

import 'react-select/dist/react-select.css';

class Product extends Component {
  render() {
    return (
      <div>
        Criar Produto
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="productName" id="productName" required />          
          <label className="mdl-textfield__label" for="productName">Nome</label>          
        </div>
        <div>
          <Creatable />
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="sellingPrice" id="sellingPrice" required pattern="-?[0-9]*(\.[0-9]+)?" />          
          <label className="mdl-textfield__label" for="sellingPrice">Preço de Venda</label>       
          <span className="mdl-textfield__error">Preço de venda deve ser um número!</span>   
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="buyingPrice" id="buyingPrice" required pattern="-?[0-9]*(\.[0-9]+)?" />          
          <label className="mdl-textfield__label" for="buyingPrice">Preço de Compra</label>       
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
