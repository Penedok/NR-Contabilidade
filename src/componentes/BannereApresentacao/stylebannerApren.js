import styled from 'styled-components'

export const ContainerBanner = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;



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


 @media screen and (min-width: 1024px) {
    width:100%;
  
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


 @media screen and (min-width: 1024px) {
     display:flex;
     flex-direction:column;
     position: relative;
     width: 100%;
     top: -12em;
     left:-12em;
     right:0;
     bottom:10em;
     z-index:5;
     width:60%;
     padding: 0.1em 2em 0 0;
     margin:0.5em 0  0;
 
   }
   

 @media  screen and (min-width: 1728px) {
  top: -13em;
  left:-21em;




}
`
export const TextoApresentacao = styled.h2`
font-weight:800;
font-size:29px;
text-align:center;
  
@media screen and (min-width: 1024px) {
    background:#fff;
    padding: 0.5em 0 1.5em 0.5em;
    font-size:33px;
    text-align:center;
    
  }

  @media screen and (min-width: 1440px) {
   
    font-size:35px;
    
  }


`
export const CaixaBotao = styled.div`
 display:flex;
 justify-content:center;
 

@media screen and (min-width: 1024px) {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position: relative;
    width: 100%;
    top: -16.5em;
    left:-13em;
    right:0;
    bottom:0;
    z-index:5;
    width:29%;
    

  }
  @media screen and (min-width: 1728px) {
    text-align:center;
    top:-17.5em;
    left:-23em;
  
  
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