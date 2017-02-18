import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Product extends Component {

  constructor() {
    super();

    this.state = {
      showModal: false,
      providerName: "",
      providers: [],
      selectedProvider: {'value': 0, 'label': 'Selecione'}
    };
  }

  componentDidMount() {
    this.setState({providers: [{'value': 1, 'label': 'Mariana'}, {'value': 2, 'label': 'Fê'}]})
  }

  modalAddProvider() {
    console.log("Modal adicionando fornecedor");
    this.setState({showModal: true});
  }

  addProvider() {
    console.log("Adicionando fornecedor ", this.state.providerName);    
    var actualProviders = this.state.providers;
    var newProvider = {'value': actualProviders[actualProviders.length - 1].value + 1, 'label': this.state.providerName};
    actualProviders.push(newProvider);
    this.setState({ showModal: false, providers: actualProviders, selectedProvider: newProvider });    
  }

  closeModal() {
    console.log("Apenas fechando o modal");
    this.setState({ showModal: false });
  }

  listProviders() {   
    return this.state.providers.map((provider)=> {
       return <li onClick={(e) => {console.log(provider); this.setState({selectedProvider: provider});}} key={provider.value} className="mdl-menu__item">{provider.label}</li>
    }); 
  }

  render() {
    return (
      <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="productName" id="productName" onChange={(e) => {e.target.required = true}} />          
          <label className="mdl-textfield__label" htmlFor="productName">Nome*</label>          
        </div>
        <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
          <input className="mdl-textfield__input" type="text" id="provider" value={this.state.selectedProvider.label} readOnly tabIndex="-1" onChange={(e) => {e.target.required = true;}} />
          <label htmlFor="provider" className="mdl-textfield__label">Fornecedor*</label>
          <ul htmlFor="provider" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
              <li key="0" onClick={this.modalAddProvider.bind(this)} className="mdl-menu__item">Criar novo <i className="material-icons">add</i></li>              
              {this.listProviders()}
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

        <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Criar Fornecedor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" name="providerName" id="providerName" placeholder="Nome" onChange={(e) => {e.target.required = true; this.setState({providerName: e.target.value});}} />                        
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.addProvider.bind(this)}>Adicionar Fornecedor</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Product;
