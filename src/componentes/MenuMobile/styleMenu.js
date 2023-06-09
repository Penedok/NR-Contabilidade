
import styled, {css} from 'styled-components'

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    top:0;
    left:0;
    right:0;
    bottom:50em;
    z-index:5;
    display: none;
    align-items:center;
    justify-content:center;
    background: rgba (17,18,17, 0.95);
    background: linear-gradient(34deg, rgba(25,88,24,0.95) 0%, rgba(17,18,17,0.95) 95%)

    opacity: 0;
   
  
    ${({ Ativo }) => Ativo && css `
    display: flex ;
    justify-content:end;
    pointer-events: auto;
    align-items:center;
 `
}
`
export const Icon = styled.img `
    margin: 1em 0.5em;
    position: absolute;
    top: 4.5rem;
    right:3rem;
    width:6%;
`
export const Navegacao= styled.nav `
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    gap: 2rem;
    font-size: 18px;

`

export const ItemNav = styled.a `
   color:#014421;
   font-weight:800;

`