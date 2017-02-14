import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Product extends Component {

  constructor() {
    super();

    this.state = {
      showModal: false,
      nomeFornecedor: ""
    };
  }

  modalAdicionarFornecedor() {
    console.log("Modal adicionando fornecedor");
    this.setState({showModal: true});
  }

  adicionarFornecedor() {
    console.log("Adicionando fornecedor ", this.state.nomeFornecedor);
    this.setState({ showModal: false });    
  }

  fecharModal() {
    console.log("Apenas fechando o modal");
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        Criar Produto
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="productName" id="productName" onChange={(e) => {e.target.required = true}} />          
          <label className="mdl-textfield__label" htmlFor="productName">Nome*</label>          
        </div>
        <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
          <input className="mdl-textfield__input" type="text" id="fornecedor" value="" readOnly tabIndex="-1" onChange={(e) => {e.target.required = true}} />
          <label htmlFor="fornecedor" className="mdl-textfield__label">Fornecedor*</label>
          <ul htmlFor="fornecedor" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
              <li onClick={this.modalAdicionarFornecedor.bind(this)} className="mdl-menu__item">Criar novo <i className="material-icons">add</i></li>
              <li className="mdl-menu__item">Forn 1</li>
              <li className="mdl-menu__item">Forn 2</li>
          </ul>
        </div>                       
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="sellingPrice" id="sellingPrice" pattern="-?[0-9]*(\.[0-9]+)?" onChange={(e) => {e.target.required = true}} />          
          <label className="mdl-textfield__label" htmlFor="sellingPrice">Preço de Venda*</label>       
          <span className="mdl-textfield__error">Preço de venda deve ser um número!</span>   
        </div>
        <div></div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="buyingPrice" id="buyingPrice" pattern="-?[0-9]*(\.[0-9]+)?" onChange={(e) => {e.target.required = true}}/>          
          <label className="mdl-textfield__label" htmlFor="buyingPrice">Preço de Compra*</label>       
          <span className="mdl-textfield__error">Preço de compra deve ser um número!</span>   
        </div>
        <br />
        <br />        
        <div style={{textAlign: "center"}}>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Criar
          </button>
        </div>

        <Modal show={this.state.showModal} onHide={this.fecharModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Criar Fornecedor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" name="providerName" id="providerName" placeholder="Nome" onChange={(e) => {e.target.required = true; this.state.nomeFornecedor = e.target.value}} />                        
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.adicionarFornecedor.bind(this)}>Adicionar Fornecedor</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Product;
