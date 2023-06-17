import { ContainerConsti,Constituicao, TituloConst, ParagrafoAudi, ParagrafoImp } from "./styleCons"
import {Botao} from "../Bnt/btn" 
import { Link } from "react-router-dom"


export const ConstituicaoAudi = () =>{
    return(
        <ContainerConsti>
            <Constituicao>
                <TituloConst>Constituição de Empresa  Auditoria </TituloConst>
                <ParagrafoAudi>
                    Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um
                     texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas
                    em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock,
                    um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais
                    obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e,
                    procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. 
                </ParagrafoAudi>
            </Constituicao>     
           <Constituicao>
              <ParagrafoImp>Declare o seu Imposto de Renda </ParagrafoImp>
              < Botao href='https://api.whatsapp.com/send?phone=5592981491600'>Aqui</Botao> 
           </Constituicao>

        </ContainerConsti>
       
    )
}

export default ConstituicaoAudi