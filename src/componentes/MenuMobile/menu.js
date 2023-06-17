import {Container} from './styleMenu';
import{Icon} from './styleMenu';
import{ItemNav} from './styleMenu';
import{Navegacao} from './styleMenu'
import { Link } from 'react-router-dom';
import { ImagemLinhaMenu } from './styleMenu';



export const MenuMobile = ({ menuIsVisible, setMenuIsVisible}) =>{
  
    
    return(
        <Container Ativo={menuIsVisible}>
          
                <Icon onClick={() => setMenuIsVisible(false)} src="/imagem/xmenu1.svg" alt="icon menu"/>
       
            <Navegacao> 
                <ItemNav>
                    <Link to="/" style={{color: '#fff', textDecoration: 'none'}}>Home</Link> 
                    <ImagemLinhaMenu src="/imagem/lineMenu.svg" alt="linha"/>    
                </ItemNav>
                <ItemNav>
                    <Link to="/Servicos-NR" style={{color: '#fff', textDecoration: 'none'}}>Serviços</Link>
                    <ImagemLinhaMenu src="/imagem/lineMenu.svg" alt="linha"/> 
                </ItemNav>
                <ItemNav href='https://api.whatsapp.com/send?phone=5592981491600'>Contate-me
                  <ImagemLinhaMenu src="/imagem/lineMenu.svg" alt="linha"/> 
                </ItemNav>
                  
            </Navegacao>
        </Container>
      


    )
}
export default MenuMobile