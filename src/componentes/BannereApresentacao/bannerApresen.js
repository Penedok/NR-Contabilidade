
import {ImgBanner, CaixaBanner,CaixaApresentacao,TextoApresentacao,CaixaBotao,Apresentabtn} from "./stylebannerApren"


export const BannereApresentacao = () =>{
    return(

        <section>
            <CaixaBanner>
                <ImgBanner src="/imagem/banner.svg"/>
            </CaixaBanner>
            <CaixaApresentacao>
                <TextoApresentacao>Oi, Eu me chamo Nilo Rodrigo e eu vou amar te ajudar
                    a consturir a sua realidade econômica e pratrimonial
                 </TextoApresentacao>
            </CaixaApresentacao>
            <CaixaBotao>
                <Apresentabtn>Sobre-Mim</Apresentabtn>
            </CaixaBotao>
        </section>



    )
}

export default BannereApresentacao