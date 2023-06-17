
import Botao from "../Bnt/btn"
import {ContainerSobremim, CaixaImgSobre,ImgSobre,ImgLinhaSobre,
 TextoSobre,ParagrafoSobre,Paragrafo, ImagemLinha2, CaixaLinha2,CaixaInfor
} from './styleSobremim'
import { Link } from "react-router-dom"


export const SobreMim = () =>{

    return(

        <ContainerSobremim>
            <CaixaImgSobre >

                <ImgSobre src="/imagem/perfilNilo1.png" alt="Imagem Perfil Nilo"/>
                <ImgLinhaSobre src="/imagem/Line2.svg"/>
           
            
                <div>
                    <TextoSobre id="sobremim">Sobre-Mim</TextoSobre>
                    <ParagrafoSobre>Manaura com gosto, tenho 27 anos, casado e pai do Cauã!
                        Atuo na área desde 2017, onde comecei a minha história em uma empresa regional,
                    conquistamos muito durante 5 anos.
                        E Hoje atuo em uma empresa Mundial. Possuo grandes experiências na área fiscal,
                        jurídica e posso te ajudar a realizar seu sonho de abrir a sua primeira empresa.
                    </ParagrafoSobre>
                    <Botao>
                        <Link to="/Servicos-NR" style={{color: '#000', textDecoration: 'none'}}>Meus Serviços</Link>
                    </Botao>   
                </div>    
            </CaixaImgSobre>
            
            <CaixaLinha2>
                <ImagemLinha2 src="/imagem/Line2.svg" alt="linha"/>
            </CaixaLinha2>    
                
            <CaixaInfor>
                <Paragrafo>Quer mais informações?</Paragrafo>
                < Botao href='https://api.whatsapp.com/send?phone=5592981491600'>Vamos conversar</Botao> 
            </CaixaInfor>
        
           
           
        </ContainerSobremim>



    )
}

export default SobreMim