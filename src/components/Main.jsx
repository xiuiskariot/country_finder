import styled from "styled-components";
import { ContainerS } from "./Container";

const WrapperS = styled.main`
  padding: 2rem 0;
  @media(min-width: 767px) {
    padding: 4rem 0;
  }
`



export const Main = ({children }) => {
  return (
    <WrapperS>
      <ContainerS>
        {children}
      </ContainerS>
   </WrapperS>
  )
}

