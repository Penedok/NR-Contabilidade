import { CaixaHeader, CaixaImagem,LogoHeader,NavegacaoHeader,ItemHeader,IconMenu,CaixaLinks } from "./Styleheader"
import { Link } from "react-router-dom"

   export const Header =({setMenuIsVisible}) =>{

  
    return(
        <CaixaHeader>
                <CaixaImagem>
                    <LogoHeader src="/imagem/logo.jpg" alt='logo nr' className="logo-header"/>
                </CaixaImagem>
                <CaixaLinks>
                    <NavegacaoHeader> 
                        <ItemHeader>
                             <Link to="/" style={{color: '#D0F0C0', textDecoration: 'none'}}>Home</Link>
                        </ItemHeader>
                        <ItemHeader>
                            <Link to="/Servicos-NR" style={{color: '#D0F0C0', textDecoration: 'none'}}>Serviços</Link>
                        </ItemHeader>
                        <ItemHeader href='https://api.whatsapp.com/send?phone=5592981491600'>Contate-me</ItemHeader>
                    </NavegacaoHeader>
                </CaixaLinks>

                <div>
                    <IconMenu onClick={() => setMenuIsVisible(true)} src="/imagem/menu.svg" />
                  
                </div>
           
        </CaixaHeader>          
    )


  }

export default Header
