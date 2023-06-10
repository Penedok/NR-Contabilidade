import styled from "styled-components";
import respon from "../respon/tela"

export const CaixaHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center;
  margin: ${respon(1)};
  max-width: 100%;
  background: #5fb13d;

  @media (min-width: 768px) {
    justify-content: space-around;

  }

  @media (min-width: 1440px) {
    justify-content: space-between;
  }

`



export const CaixaImagem = styled.div`
  width:25%


`
export const LogoHeader= styled.img`
  width:95%;

  @media (min-width: 768px) {
    width:30%;
  }

  @media (min-width: 1440px) {
    width:25%;
  }

`
export const CaixaLinks = styled.div`
  display:flex;
  margin-left:auto;

`

export const NavegacaoHeader= styled.nav`
display:none;
@media (min-width: 768px) {
  display:flex;

}
`
export const ItemHeader= styled.a`
@media (min-width: 768px) {
 padding:0 1em;
 font-size:18px;
 color: #D0F0C0;
 text-decoration:none;
 font-weight:800px;

}
 

`
export const IconMenu =styled.img `
margin: 1em 0.5em;
position: absolute;
top: 4.5rem;
right:3rem;


@media (min-width: 768px) {
  display: none;
}

`
