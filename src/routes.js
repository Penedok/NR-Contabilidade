import React from "react";
import {BrowserRouter, Switch, Route,} from 'react-router-dom'


import Main from './pages/Main/home';
import Servicos from "./pages/Servicos/servico";

export const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Servicos-NR" component={Servicos} />
            </Switch>
    
        </BrowserRouter>
    )


}

export default Routes