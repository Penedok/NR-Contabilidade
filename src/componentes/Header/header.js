import { CaixaHeader, CaixaImagem,LogoHeader,NavegacaoHeader,ItemHeader,IconMenu } from "./Styleheader"

   export const Header =({setMenuIsVisible}) =>{

  
    return(
        <CaixaHeader>
                <CaixaImagem>
                    <LogoHeader  onClick={()=> alert("ola")} src="/imagem/logo.jpg" alt='logo nr' className="logo-header"/>
                </CaixaImagem>
                <div className="caixa-links">
                    <NavegacaoHeader> 
                        <ItemHeader href="#" >Home</ItemHeader>
                        <ItemHeader href="#" >Serviços</ItemHeader>
                        <ItemHeader href="#" >ERRADO</ItemHeader>
                    </NavegacaoHeader>
                </div>

                <div>
                    <IconMenu onClick={() => setMenuIsVisible(true)} src="/imagem/menu.svg" />
                  
                </div>
           
        </CaixaHeader>          
    )


  }

export default Header
