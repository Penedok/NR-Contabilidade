import { CaixaHeader, CaixaImagem,LogoHeader,NavegacaoHeader,ItemHeader,IconMenu,CaixaLinks } from "./Styleheader"

   export const Header =({setMenuIsVisible}) =>{

  
    return(
        <CaixaHeader>
                <CaixaImagem>
                    <LogoHeader  onClick={()=> alert("ola")} src="/imagem/logo.jpg" alt='logo nr' className="logo-header"/>
                </CaixaImagem>
                <CaixaLinks>
                    <NavegacaoHeader> 
                        <ItemHeader href="#" >Home</ItemHeader>
                        <ItemHeader href="#" >Serviços</ItemHeader>
                        <ItemHeader href='https://api.whatsapp.com/send?phone=5592981491600'>Contate</ItemHeader>
                    </NavegacaoHeader>
                </CaixaLinks>

                <div>
                    <IconMenu onClick={() => setMenuIsVisible(true)} src="/imagem/menu.svg" />
                  
                </div>
           
        </CaixaHeader>          
    )


  }

export default Header
