import {Homestyle} from './stylehome'
import Header from "../Header/header";
import MenuMobile from "../MenuMobile/menu";
import BannereApresentacao from "../BannereApresentacao/bannerApresen";
import SobreMim from "../Sobremim/Sobremim";
import { useState } from "react";
import Rodape from "../Rodape/rodape";


 export const Home = () =>{
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <Homestyle>  
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Header setMenuIsVisible={setMenuIsVisible}/>
            <BannereApresentacao/>
            <SobreMim/>
            <Rodape/>

        </Homestyle>
    )
}

export default Home;