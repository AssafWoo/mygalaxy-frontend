import { Tabs, Tab } from "@chakra-ui/react";
import styled from "styled-components";
import { Black, DarkerTheme, MainYellow, White } from "../../Styles/Colors";

export const ScrollableTabListContainer = styled.div`
  overflow-x: auto; 
  white-space: nowrap; 
  -webkit-overflow-scrolling: touch; 
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none; 
  }
  border: none;
`;

export const CircleTab = styled(Tab)`
  border-radius: 1.5625rem;
  margin: 0.625rem;
  border: 0.1875rem solid ${MainYellow} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  background: ${(props) => (props.isSelected ? MainYellow : White)} !important;
  color: ${(props) => (props.isSelected ? Black : "inherit")} !important;

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? MainYellow : "none"} !important;
  }
`;

export const StyledTabs = styled(Tabs)`
  border-color: transparent;
`;

export const MainPanel = styled.div`
  flex-grow: 1;
  border-radius: 0.9375rem;
  color: ${DarkerTheme};
  transition: opacity 0.5s ease-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  overflow: hidden;
  margin-top: 1.25rem;
`;
