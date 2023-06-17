import {CaixaRodape, NavegacaoRodape,ItemRodape,CaixaLinks,CaixaIcon,Logorodape,IconINS,IconWPP} from './stylerodape'
import { Link } from 'react-router-dom'



export const Rodape = ()=>{
    return(
        <CaixaRodape>
            <Logorodape src='/imagem/logo.jpg' alt='logo'></Logorodape>
            <CaixaLinks>
                <NavegacaoRodape> 
                    <ItemRodape> 
                        <Link to="/" style={{color: '#D0F0C0', textDecoration: 'none'}}>Home</Link>
                    </ItemRodape>
                    <ItemRodape>
                        <Link to="/Servicos-NR" style={{color: '#D0F0C0', textDecoration: 'none'}}>Servicos</Link>
                    </ItemRodape>
                    <ItemRodape href="#">Contate-me</ItemRodape>
                </NavegacaoRodape>
            </CaixaLinks>
            <CaixaIcon>
                <IconWPP href='https://api.whatsapp.com/send?phone=5592981491600'>
                    <img src='/imagem/iconeIns.svg'  alt='icon-instagram'></img>
                </IconWPP>
                <IconINS href='https://www.instagram.com/nr_contabilidade/'>
                   <img src='/imagem/iconeWpp.svg' alt='icon-wpp'></img>
                </IconINS>
            </CaixaIcon>
        </CaixaRodape>
          
   
    )
}

export default Rodape