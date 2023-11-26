import styled from "styled-components";
import { DarkerTheme, LightTheme } from "./Colors";

export const Wrapper = styled.div`
  width: 100%;
  background: ${LightTheme};
  margin: 0 auto;
  min-height: 100vh;
  color: ${DarkerTheme};
  font-family: "Rubik";
  padding: 1rem;
  position: relative;
  overflow-y: auto;
`;

export const InnerWrapper = styled.div`
  margin: auto;
  max-width: 75rem;
  width: 100%;

  @media (max-width: 48rem) {
    padding: 0;
  }
`;

export const Shadow = "17px 10px 22px -9px rgba(0,0,0,0.05)";
