import Botao from "../Bnt/btn"
import {ContainerSobremim, CaixaImgSobre,ImgSobre,ImgLinhaSobre,CaixaTextoSobre,
 TextoSobre,ParagrafoSobre,Paragrafo, ImagemLinha2



} from './styleSobremim'


export const SobreMim = () =>{

    return(

        <ContainerSobremim>
            <CaixaImgSobre >
                <ImgSobre src="/imagem/perfilNilo1.png" alt="Imagem Perfil Nilo"/>
                <ImgLinhaSobre src="/imagem/Line2.svg"/>
            </CaixaImgSobre>
            <CaixaTextoSobre>
                <TextoSobre id="sobremim">Sobre-Mim</TextoSobre>
                <ParagrafoSobre>Manaura com gosto, tenho 27 anos, casado e pai do Cauã!
                    Atuo na área desde 2017, onde comecei a minha história em uma empresa regional,
                   conquistamos muito durante 5 anos.
                     E Hoje atuo em uma empresa Mundial. Possuo grandes experiências na área fiscal,
                     jurídica e posso te ajudar a realizar seu sonho de abrir a sua primeira empresa.
                </ParagrafoSobre>
            </CaixaTextoSobre>
          
            <div>
                <Botao>Meus Serviços</Botao>
            </div>
            <div>
                <ImagemLinha2 src="/imagem/Line2.svg" alt="linha"/>
            </div>    
                
            <div>
                <Paragrafo>Quer mais iformações?</Paragrafo>
                < Botao href='https://api.whatsapp.com/send?phone=5592981491600'>Vamos conversar</Botao> 
            </div>
        
           
           
        </ContainerSobremim>



    )
}

export default SobreMim