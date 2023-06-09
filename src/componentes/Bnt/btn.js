import {Botoes,Div} from './styleBtn'

export const Botao = (props) =>{
    return(
        <Div>
            <Botoes href={props.href}>{props.children}</Botoes>
        </Div>



    )
}

export default Botao