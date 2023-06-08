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

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const CaixaImagem = styled.div`
  width:25%

`
export const LogoHeader= styled.img`
  width:95%;

`

export const NavegacaoHeader= styled.nav`
 display:none;

`
export const ItemHeader= styled.a`
display:none;
 

`
export const IconMenu =styled.img `
margin: 1em 0.5em;
position: absolute;
top: 4.5rem;
right:3rem;

`
