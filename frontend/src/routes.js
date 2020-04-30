import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' ;
import Main from './pages/main';
import Detalhes from './pages/detalhes';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Grupo from './pages/grupos';
import itemG from './pages/item-grupo';
import Test from './pages/test';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/lista" component ={Main}/>
            <Route exact path = "/detalhes/:id" component ={Detalhes}/>
            <Route exact path = "/cadastro/" component ={Cadastro}/>
            <Route exact path = "/test" component ={Test}/>
            <Route exact path = "/" component ={Home}/>
            <Route exact path = "/grupo" component ={Grupo}/>
            <Route exact path = "/itemgrupo/:tag" component ={itemG}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;