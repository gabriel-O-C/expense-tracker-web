import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.section`
  flex: 1;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.dark_gray};
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;

export const Info = styled.div<{color?: string}>`
  text-align: center;
  font-weight: 700;
  color: ${props => props.color ?? theme.colors.black};
`;