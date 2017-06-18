import React, { Component } from 'react'
import { About } from './About/index.react'
import { Dashboard } from './Dashboard/index.react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

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
                    <Route path='/dashboard' component={Dashboard}/>                    
                </div>
            </BrowserRouter>
        )    
    }    
} 
