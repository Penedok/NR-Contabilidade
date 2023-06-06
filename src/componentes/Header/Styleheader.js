import styled from "styled-components";
import respon from "../respon/tela"

export const CaixaHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${respon(32)};
  max-width: 100%;
  b

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  
  }
`;