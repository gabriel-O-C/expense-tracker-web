import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.text};
  box-shadow: 0 0 5px ${(props) => props.theme.colors.light_gray};
  border-radius: 10px;
  margin-top: 20px;
`;