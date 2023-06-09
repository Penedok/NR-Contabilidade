import Botao from "../Bnt/btn"
import {ContainerSobremim, CaixaImgSobre,ImgSobre,ImgLinhaSobre,CaixaTextoSobre,
 TextoSobre,ParagrafoSobre,Paragrafo, ImagemLinha2



} from './styleSobremim'


export const SobreMim = () =>{
    return(

        <ContainerSobremim>
            <CaixaImgSobre>
                <ImgSobre src="/imagem/perfilNilo1.png" alt="Imagem Perfil Nilo"/>
                <ImgLinhaSobre src="/imagem/Line2.svg"/>
            </CaixaImgSobre>
            <CaixaTextoSobre>
                <TextoSobre>Sobre-Mim</TextoSobre>
                <ParagrafoSobre>É um fato conhecido de todos que um leitor se distrairá
                  com o conteúdo de texto legível de uma página quando estiver
                  examinando sua diagramação. A vantagem de usar Lorem Ipsum é 
                  que ele tem uma distribuição normal de letras, ao contrário de
                 "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência
                  similar a de um texto legível</ParagrafoSobre>
            </CaixaTextoSobre>
          
            <div>
                <Botao>Meus Serviços</Botao>
            </div>
            <div>
                <ImagemLinha2 src="/imagem/Line2.svg" alt="linha"/>
            </div>    
                
            <div>
                <Paragrafo>Quer mais iformações?</Paragrafo>
                < Botao className="btn">Vamos conversar</Botao> 
            </div>
        
           
           
        </ContainerSobremim>



    )
}

export default SobreMim