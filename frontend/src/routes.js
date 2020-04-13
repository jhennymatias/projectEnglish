import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' ;
import Main from './pages/main';
import Detalhes from './pages/detalhes';
import Cadastro from './pages/cadastro';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component ={Main}/>
            <Route exact path = "/detalhes/:id" component ={Detalhes}/>
            <Route exact path = "/cadastro/" component ={Cadastro}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;