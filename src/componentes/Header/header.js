import { CaixaHeader, CaixaImagem,LogoHeader, } from "./Styleheader"

   export const Header =({setMenuIsVisible}) =>{

  
    return(
        <CaixaHeader>
                <CaixaImagem>
                    <LogoHeader  onClick={()=> alert("ola")} src="/imagem/logo.jpg" alt='logo nr' className="logo-header"/>
                </CaixaImagem>
                <div className="caixa-links">
                    <nav> 
                        <a href="#" className="lista-item">Home</a>
                        <a href="#" className="lista-item">Serviços</a>
                        <a href="#" className="lista-item">ERRADO</a>
                    </nav>
                </div>

                <div>
                    <img onClick={() => setMenuIsVisible(true)} src="/imagem/abrir.svg" />
                  
                </div>
           
        </CaixaHeader>          
    )


  }

export default Header
