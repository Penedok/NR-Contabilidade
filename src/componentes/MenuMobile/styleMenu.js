
import styled, {css} from 'styled-components'

export const Container = styled.section`
    position: absolute;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% );;
    backdrop-filter: blur(3px);
    width: 100%;
    top:0px;
    left:0;
    right:0;
    bottom:15rem;
    z-index:5;
    display: none;
    align-items:center;
    justify-content:space-around;
    opacity: 0.9;
   
   
  
    ${({ Ativo }) => Ativo && css `
    display: flex ;
    justify-content:space-around;
    pointer-events: auto;
    align-items:center;
 `
}
`
export const Icon = styled.img `

    position: absolute;
    top: 2.1rem;
    right:1rem;
    width:6%;
`

export const Navegacao= styled.nav `
    display: flex;
    align-items:center;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 18px;

`

export const ItemNav = styled.a `
   display:flex;
   flex-direction:column;
   align-items:center;
   color:#fff;
   font-weight:600;
   text-decoration:none;
   cursor:pointer;
   font-size:20px;

`
export const ImagemLinhaMenu =styled.img`
    margin:0.5em 0;
    

`