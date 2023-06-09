import {Botoes} from './styleBtn'

export const Botao = (props) =>{
    return(
        <div>
            <Botoes onClick={props.onClick}>{props.children}</Botoes>
        </div>



    )
}

export default Botao