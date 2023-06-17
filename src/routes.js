import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Main from './pages/Main/home';
import Servicos from "./pages/Servicos/servico";

export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main/>} />
                <Route path="/Servicos-NR" element={<Servicos/>} />
            </Routes>
    
        </BrowserRouter>
    )


}

export default Rotas