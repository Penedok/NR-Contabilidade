
import {ImgBanner, CaixaBanner,CaixaApresentacao,TextoApresentacao,CaixaBotao,Apresentabtn,ContainerBanner} from "./stylebannerApren"


export const BannereApresentacao = () =>{
    return(

        <ContainerBanner>
            <CaixaBanner>
                <ImgBanner src="/imagem/banner.svg"/>
            </CaixaBanner>
            <CaixaApresentacao>
                <TextoApresentacao>Oi, eu sou o Nilo e posso te ajudar 
                   em suas operações financeiras.
               
                 </TextoApresentacao>
                
            </CaixaApresentacao>
            <CaixaBotao>
            <Apresentabtn href="#sobremim">Sobre-Mim</Apresentabtn>
            </CaixaBotao>
        </ContainerBanner>



    )
}

export default BannereApresentacao