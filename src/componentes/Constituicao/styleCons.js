import styled from 'styled-components'

export const  ContainerConsti = styled.div `
    display:flex;
    flex-direction:column;

    @media screen and (min-width: 1024px) {
        flex-direction:row;
        
      }

`
export const  Constituicao = styled.div `
    padding: 0 2em;

    @media screen and (min-width: 1024px) {
        width:90%; 
        padding: 3em 2em;    
      }  


`
export const  TituloConst = styled.h2 `
color:#fff;
font-size:20px;
text-align:center;
text-transform:uppercase;

@media screen and (min-width: 1024px) {
   
}


`
export const  ParagrafoAudi = styled.p `
color:#fff;
text-align:center;
    @media screen and (min-width: 1024px) {
        padding: 0 2em;
    }


`
export const  ParagrafoImp = styled.p `
color:#fff;
text-align:center;
font-size:22px;
text-transform:uppercase;
font-weight: 800;
margin: 1.5em 0;


`