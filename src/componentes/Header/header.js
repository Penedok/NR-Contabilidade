import { CaixaHeader} from "./Styleheader"



const HeaderContainer =() =>{

    return(
        <CaixaHeader>
            <div className="caixa-imagem">
                <img src="/imagem/logo.jpg" alt='logo nr' className="logo-header"/>
            </div>
            <div className='caixa-menu'>
                <img src="/imagem/menu.svg" alt="icon menu" className="icon-menu"/>
            </div>
            <div className="caixa-links">
                <ul className="caixa-lista"> 
                    <li className="lista">
                        <a href="#" className="lista-item">Home</a>
                    </li>
                    <li  className="lista">
                        <a href="#" className="lista-item">Serviços</a>
                    </li>
                    <li  className="lista">
                        <a href="#" className="lista-item">Contate-me</a>
                    </li>
                </ul>
            </div>
        </CaixaHeader>      
            
    )


}

export default HeaderContainer