
import {ImgBanner, CaixaBanner,CaixaApresentacao,TextoApresentacao,CaixaBotao,Apresentabtn} from "./stylebannerApren"


export const BannereApresentacao = () =>{
    return(

        <section>
            <CaixaBanner>
                <ImgBanner src="/imagem/banner.svg"/>
            </CaixaBanner>
            <CaixaApresentacao>
                <TextoApresentacao>Oi, eu sou o Nilo e posso te ajudar 
                   em suas operações financeiras.
                 </TextoApresentacao>
            </CaixaApresentacao>
            <CaixaBotao>
                <Apresentabtn>Sobre-Mim</Apresentabtn>
            </CaixaBotao>
        </section>



    )
}

export default BannereApresentacao