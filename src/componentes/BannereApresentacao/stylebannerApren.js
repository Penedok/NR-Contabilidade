import styled from 'styled-components'

export const ContainerBanner = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center
  align-items:center;

  @media (min-width: 1440px) {
   

    
    

  }
 
`

export const CaixaBanner = styled.div`
display:flex;
flex-direction:column;
justify-content:center
align-items:center;
    
`
export const ImgBanner = styled.img`
 width:100%;
 max-width: 900px;
 margin: 5em 0 0 0;


 @media (min-width: 768px) {
    width:100%;
    margin: 0;
  }
  @media (min-width: 1768px) {
    width:65%;
    margin: 0 0 0 15em  
 

  }

`
export const CaixaApresentacao = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 padding:2em;
 margin: 5em 0 1em 0;
 display:flex;
 justify-content:center;
 align-items:center;
 padding: 1.5em ;
 margin: 1.5em 0 0 0;


 @media (min-width: 768px) {
     display:flex;
     flex-direction:column;
     position: absolute;
     width: 100%;
     top:32em;
     left:0;
     right:0;
     bottom:10em;
     z-index:5;
     width:60%;
     padding: 0.1em 2em 0 0;
     margin:0.5em 0  0;
 
   }
   

 @media (min-width: 1440px) {

  top:31em;


}
`
export const TextoApresentacao = styled.h2`
font-weight:800;
font-size:29px;
text-align:center;
  
@media (min-width: 768px) {
    background:#fff;
    padding: 0.5em 0 2em 0.5em;
    font-size:33px;
    
  }

  @media (min-width: 1440px) {
   
    font-size:35px;
    
  }




`
export const CaixaBotao = styled.div`
 display:flex;
 justify-content:center;
 

@media (min-width: 768px) {
    display:flex;
    flex-direction:column;
    position: absolute;
    width: 100%;
    top: 44em;
    left:0;
    right:0;
    bottom:50em;
    z-index:5;
    width:29%;
    

  }
  @media (min-width: 1768px) {
    text-align:center;
    top:32em;
  
  
  }
`
export const Apresentabtn = styled.a`
background:#203a4b;
padding:0.5em 3em;
text-transform: uppercase;
color:#fff;
font-weight:500;
cursor: pointer;
margin:0 1em;
padding: 0.6em 2em;
border-radius:5px; 
font-size:15px;
text-decoration:none;


`