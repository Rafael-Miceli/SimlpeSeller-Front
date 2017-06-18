import React, { Component } from 'react';
import { AuthService } from './AuthService';

export const LOGIN = "LOGIN";

const loginAction = (username, password) => {
    return {
        type: LOGIN,
        username: username,
        password: password
    }
}

class Login extends Component {

  constructor() {
    super();

    this.state = {
      showModal: false,
      username: "",
      password: ""
    };
  } 

  login() {
    let authService = new AuthService();

    authService.login(
        {username: this.state.username, password: this.state.password}, 
        (result) => {
          console.log("Resultado ", result);            
        }
    );
  }

  render() {
      return (
        <div className="mdl-cell mdl-cell--4-col mdl-typography--text-center">
            Bem vindo! Faça seu login

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" name="email" id="email" onChange={(e) => {e.target.required = true; this.setState({username: e.target.value});}} />          
              <label className="mdl-textfield__label" htmlFor="email">email*</label>          
            </div>

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" name="password" id="password" onChange={(e) => {e.target.required = true; this.setState({password: e.target.value});}} />          
              <label className="mdl-textfield__label" htmlFor="password">senha*</label>          
            </div>

            <div style={{textAlign: "center"}}>
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.login.bind(this)}>
                Login
              </button>
            </div>
        </div>
      );
  }
}

export default Login