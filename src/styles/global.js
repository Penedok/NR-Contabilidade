import { createGlobalStyle } from "styled-components";
import respon from '../componentes/respon/tela'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${respon(24)};

      @media (min-width: 768px) {
        font-size: ${respon(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${respon(16)};
      }
    }
`;

export default Global;