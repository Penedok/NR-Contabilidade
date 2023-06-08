import { CaixaHeader, CaixaImagem,LogoHeader,NavegacaoHeader,ItemHeader,IconMenu } from "./Styleheader"

   export const Header =({setMenuIsVisible}) =>{

  
    return(
        <CaixaHeader>
                <CaixaImagem>
                    <LogoHeader  onClick={()=> alert("ola")} src="/imagem/logo.jpg" alt='logo nr' className="logo-header"/>
                </CaixaImagem>
                <div className="caixa-links">
                    <NavegacaoHeader> 
                        <ItemHeader href="#" className="lista-item">Home</ItemHeader>
                        <ItemHeader href="#" className="lista-item">Serviços</ItemHeader>
                        <ItemHeader href="#" className="lista-item">ERRADO</ItemHeader>
                    </NavegacaoHeader>
                </div>

                <div>
                    <IconMenu onClick={() => setMenuIsVisible(true)} src="/imagem/menu.svg" />
                  
                </div>
           
        </CaixaHeader>          
    )


  }

export default Header
