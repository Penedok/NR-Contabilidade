import React from "react";
import { useState } from "react"
import {Header} from '../../componentes/Header/header'
import {MenuMobile} from '../../componentes/MenuMobile/menu'
import {Consultoria} from '../../componentes/Consultoria/Consultoria'
import {ConstituicaoAudi} from '../../componentes/Constituicao/Consti'
import {Rodape} from '../../componentes/Rodape/rodape'



export const Servicos = () =>{
  const [menuIsVisible, setMenuIsVisible] = useState(false)

    return (
      <div>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Header
          setMenuIsVisible={setMenuIsVisible}
        />
        <Consultoria/>
        <ConstituicaoAudi/>
        <Rodape/>
         
      </div>
    )
}

export default Servicos;