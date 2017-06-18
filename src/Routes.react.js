import React, { Component } from 'react'
import { About } from './About/index.react'
import { Dashboard } from './Dashboard/index.react'
import Login from './Login';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

export default class Routes extends Component {    

    render() {
        return (            
            <BrowserRouter>
                <div>
                    <ul>
                    <li><Link to='/dashboard'>Acessar Minha Conta</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path='/' component={About}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path='/dashboard' component={Dashboard}/>                    
                </div>
            </BrowserRouter>
        )    
    }    
} 

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
