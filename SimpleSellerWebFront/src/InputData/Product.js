import React, { Component } from 'react';
import Select, { Creatable } from 'react-select';

import 'react-select/dist/react-select.css';

class Product extends Component {
  render() {
    return (
      <div>
        Criar Produto
        <div>
          <input type="text" name="productName" placeholder="Nome" required />          
        </div>
        <div>
          <Creatable />
        </div>
        <div>
          <input type="text" name="sellingPrice" placeholder="Preço de Venda" required />          
        </div>
        <div>
          <input type="text" name="buyingPrice" placeholder="Preço de Compra" required />          
        </div>
        <div>
          <input type="button" name="btnCreate" value="Criar" />          
        </div>
      </div>
    );
  }
}

export default Product;
