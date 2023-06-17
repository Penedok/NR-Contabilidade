import styled from 'styled-components'

export const ContainerSobremim = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:1em 0 0 0;


        @media screen and (min-width: 1024px) {
            display:flex;
           flex-direction:row;
           flex-wrap:wrap;
           justify-content:center;
           align-items:center;
            padding: 0 2em;
            position:relative;
            top: -15em;
            
        }

`
export const CaixaImgSobre = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    @media screen and (min-width: 1024px) {
        display:flex;
        flex-direction: row;
        justify-content:space-around;
        align-items:center;   
        padding: 0 5em;
        margin: 0 1em;
    }

    @media screen and (min-width: 1440px) {
        align-items:center;
    
    }


`
export const ImgSobre = styled.img`
 width:80%;
 max-width: 322px;

 @media screen and (min-width: 1024px) {
    margin: 0 0 6em 0;
    position:relative;
       left: 8em;

}

    @media screen and (min-width: 1728px) {
       max-width: 500px;
       margin: 0 0 15em 0;
       position:relative;
       left: 8em;
    }
  
`
export const ImgLinhaSobre = styled.img`
    width: 50rem;
    margin:2em 0;
    max-width: 305px;

@media screen and (min-width: 1024px) {
   display:none;
    }
   
`
export const CaixaTextoSobre = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding: 5em 0;


@media screen and (min-width: 1728px) {
    justify-content:space-around;
    
}


`

export const TextoSobre = styled.h2`
text-align:center;
font-size:32px;
color:#D0F0C0;
font-weight: 800;


@media  screen and (min-width: 1440px) {
    font-size:48px;
}



`
export const ParagrafoSobre = styled.p`
font-size:18px;
color:#D0F0C0;
text-align:center;
padding:0 1em;


@media screen and (min-width: 1024px) {
  
}



@media screen and (min-width: 1728px) {
    font-size:29px;  ;
    padding: 0 3.5em;
   
}

`

export const Paragrafo =styled.p`
   
    font-size:29px;
    font-weight: 800;
    color:#D0F0C0;
    text-align:center;
    margin:auto;

    @media  screen and (min-width: 1024px) {
       margin: 0 1.5rem 0 0;
    }   


`
export const CaixaLinha2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:2em 0;

@media screen and (min-width: 1024px) {
    display:none;
}


`
export const ImagemLinha2 = styled.img`
max-width: 305px;
width:50rem;


@media screen and (min-width: 1024px) {
    display:none;

}


`
export const CaixaInfor = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center; 
align-items:center;
margin-bottom:3em;
 

@media screen and (min-width: 1024px) {
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   margin:2em 0 0em 0;
   position:relative;
   top:6em;
 
  
}

@media screen and (min-width: 1768px) {
  
    justify-content: space-around;
    
    margin:8em 0 5em 0;
   
 }

`

export const DivTexto = styled.div`
    

@media screen and (min-width: 1024px) {
    display:flex;
    flex-direction: column;
    justify-content-center;
    align-items:center;
    margin: 0 0 1.8em 0;
    position:relative;
    left: 7em;
    padding:0 3em;
    
  
   
 }

 @media  screen and (min-width: 1728px) {
    padding: 3em 0 0 0 ;
    justify-content:space-between;
    position:relative;
    left: 7em;

}

`
