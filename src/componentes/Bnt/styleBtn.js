import styled from 'styled-components'

export const Div = styled.div`
    display:flex;
    justify-content:center;
    padding:1em;

`

export const Botoes = styled.a`
 border: 1px solid transparent;
 border-radius:5px; 
 background: #fff;
 text-transform: uppercase;
 text-decoration:none;
 font-size:18px;
 padding: 0.6em 1em;
 box-shadow: 7px 7px 0 #383741;

 color:#000;

 @media (min-width: 768px) {
    margin:5rem;
    padding: 0.6em 0.5em;
}

@media (min-width: 1440px) {
    margin:5rem;
    padding: 1em 3em;
}





`