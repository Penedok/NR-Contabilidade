import {CaixaRodape, NavegacaoRodape,ItemRodape,CaixaIcon,Logorodape,IconINS,IconWPP} from './stylerodape'



export const Rodape = ()=>{
    return(
        <CaixaRodape>
            <Logorodape src='/imagem/logo.jpg' alt='logo'></Logorodape>
            <div className="caixa-links">
                <NavegacaoRodape> 
                    <ItemRodape href="#">Home</ItemRodape>
                    <ItemRodape href="#">Serviços</ItemRodape>
                    <ItemRodape href="#">Contate-me</ItemRodape>
                </NavegacaoRodape>
            </div>
            <CaixaIcon>
                <IconWPP href='https://www.instagram.com/nr_contabilidade/'>
                    <img src='/imagem/iconeIns.svg'  alt='icon-instagram'></img>
                </IconWPP>
                <IconINS  href='https://api.whatsapp.com/send?phone=5592981491600'>
                   <img src='/imagem/iconeWpp.svg' alt='icon-wpp'></img>
                </IconINS>
            </CaixaIcon>
        </CaixaRodape>
          
   
    )
}

export default Rodape