import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  height: 150px;
  text-align: center;
`;

export const Header__Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  padding: 0;
  padding-top: ${(props) => props.theme.spaces.medium};
`;
