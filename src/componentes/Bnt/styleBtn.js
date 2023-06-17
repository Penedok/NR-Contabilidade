import styled from 'styled-components'

export const Div = styled.div`
    display:flex;
    justify-content:center;
    padding:2em;

    @media (min-width: 1024px) {
        padding:0;
        
    }
    @media (min-width: 1728px) {
        padding:0;
        position:relative;
        top:-4em;
        
    }

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

 &:hover {
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% );;
    color:#fff;
  }

 @media (min-width: 768px) {
    margin:1.5rem;
    
}

@media (min-width: 1440px) {
    margin:5rem;
    padding: 1em 3em;
}





`