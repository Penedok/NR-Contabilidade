import Header from "../Header/header";
import MenuMobile from "../MenuMobile/menu";
import BannereApresentacao from "../BannereApresentacao/bannerApresen";
import { useState } from "react";


 export const Home = () =>{
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>  
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Header setMenuIsVisible={setMenuIsVisible}/>
            <BannereApresentacao/>

        </>
    )
}

export default Home;