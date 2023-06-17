 import { useState } from "react"
 import {Header} from "../../componentes/Header/header.js"
 import {BannereApresentacao} from "../../componentes/BannereApresentacao/bannerApresen.js"
 import {MenuMobile} from "../../componentes/MenuMobile/menu.js"
 import {SobreMim} from "../../componentes/Sobremim/Sobremim.js"
 import {Rodape} from "../../componentes/Rodape/rodape.js"






 export const Main = () =>{
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
                <BannereApresentacao/>
                <SobreMim />
                <Rodape />
               
            </div>
     
    )
}

export default Main;