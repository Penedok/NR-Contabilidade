import  styled from 'styled-components'

export const CaixaRodape = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 background: #5fb13d;


 

 @media (min-width: 768px) {
  flex-direction:row;
  justify-content:space-around;
}

@media (min-width: 1768px) {
  
}
`
export const  CaixaLinks =styled.div`
 


`
export const NavegacaoRodape = styled.nav`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 margin:1em 0;

 @media (min-width: 768px) {
  flex-direction:row;


}

@media (min-width: 1768px) {
  padding: 0.5em 0;
}



`

export const ItemRodape = styled.a`
color:#D0F0C0;
font-size:20px;
text-decoration:none;
padding: 0.5em 0;
font-weight:800;

@media (min-width: 768px) {
  padding: 0.5em;
}
`
export const CaixaIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 0 1em 0 0 ;

  @media (min-width: 768px) {
    padding: 0 0 0 0;
 }
 
 
`
export const Logorodape = styled.img`
 width:20%;


 @media (min-width: 768px) {
   width: 10%;
}

@media (min-width: 1768px) {
  width: 5%;

}

`
export const IconINS = styled.a`
 padding: 0 1em;
 width:35%;
`
export const IconWPP = styled.a`
 padding: 0 1em;
 margin: 1em;
 width:35%;
`
