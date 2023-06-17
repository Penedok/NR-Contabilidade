import styled from 'styled-components'

export const Containerconsul = styled.div`
 display:flex;
 flex-direction: column;
 justify-content:center;

 @media screen and (min-width: 1024px) {
  flex-direction:row;
  flex-wrap:wrap;
  padding: 0 3em;
  
  
}

`
export const ServicoBanner = styled.div`
  @media screen and (min-width: 1024px) {
    font-size: 25px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

`
export const TituloCon = styled.h2`
    font-size: 14px;
    padding: 1em 0;
    text-align:center;
    text-transform:uppercase;

    @media screen and (min-width: 1024px) {
      font-size: 25px;
    }

`
export const ConsuImg = styled.img`
    width:100vw;

    @media screen and (min-width: 1024px) {
      max-width: 500px;
      max-height:500px;
    }

`
export const Servicos = styled.div`
   display:flex;
   flex-direction:column;
   border: 1px solid transparent;
   border-radius: 10px;
   background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% );
   margin:  1em; 
   padding: 2em 0;
   
   @media screen and (min-width: 1024px) {
    
  }


`
export const TituloServicos = styled.h2`
  color: #fff;
  text-align:center;
  text-transform:uppercase;
 


`
export const ParagrafoServico = styled.p`
  color: #fff;
  text-align:center;
 


`