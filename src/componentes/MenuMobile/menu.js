import {Container} from './styleMenu';
import{Icon} from './styleMenu';
import{ItemNav} from './styleMenu';
import{Navegacao} from './styleMenu'



export const MenuMobile = ({ menuIsVisible, setMenuIsVisible}) =>{
  
    
    return(
        <Container Ativo={menuIsVisible}>
          
                <Icon onClick={() => setMenuIsVisible(false)} src="/imagem/xmenu1.svg" alt="icon menu"/>
       
            <Navegacao> 
                <ItemNav >Home</ItemNav>
                <ItemNav>Serviços</ItemNav>
                <ItemNav href='https://api.whatsapp.com/send?phone=5592981491600'>Contate-me</ItemNav>
                </Navegacao>
        </Container>
      


    )
}
export default MenuMobile