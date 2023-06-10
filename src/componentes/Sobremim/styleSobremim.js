import styled from 'styled-components'

export const ContainerSobremim = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:1em 0 9em 1.5em;

    @media (min-width: 768px) {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        }

        @media (min-width: 68px) {
            padding: 0 2em;
            
        }

`
export const CaixaImgSobre = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    @media (min-width: 768px) {
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:end;

    }
    @media (min-width: 1440px) {
        align-items:center;
    
    }


`
export const ImgSobre = styled.img`
 width:80%;
text-align:center;
 @media (min-width: 768px) {
    width:40%;
    }

    @media (min-width: 1440px) {
        width:100%;
    }
  
`
export const ImgLinhaSobre = styled.img`
width: 50rem;
margin:2em 0;

@media (min-width: 768px) {
   display:none;
    }
   
`
export const CaixaTextoSobre = styled.div`
display:flex;
justify-content:start;
flex-direction:column;
padding: 5em 0;

`
export const TextoSobre = styled.h2`
text-align:center;
font-size:32px;
color:#D0F0C0;
font-weight: 800;
padding:0 3.7em 0 0;

@media (min-width: 1440px) {
    font-size:48px;
}



`
export const ParagrafoSobre = styled.p`
font-size:18px;
padding: 4.5rem;
color:#D0F0C0;

@media (min-width: 1440px) {
    font-size:35px;  ;
    padding: 2em3.5em;
}

`

export const Paragrafo =styled.p`
    padding: 1em 0  1.5em;
    font-size:29px;
    font-weight: 800;
    color:#D0F0C0;
    text-align:center;

    @media (min-width: 768px) {
        padding: 0.5em;
    }


`
export const CaixaLinha2 = styled.div`


@media (min-width: 768px) {
    display:none;
}


`
export const ImagemLinha2 = styled.img`
margin:9em 0 0 3em;
width:50rem;


@media (min-width: 768px) {
    display:none;

}


`
export const CaixaInfor = styled.div`

width:50rem;
display:flex;
flex-wrap:wrap;
align-items:center;
width:100%;



@media (min-width: 768px) {
   display:flex;
   justify-content:center;
   align-items:center;
   width:100%;
   margin:15em 0 5em 0;
  
}

@media (min-width: 1768px) {
  
    justify-content: space-around;
    
    margin:8em 0 5em 0;
   
 }

`
