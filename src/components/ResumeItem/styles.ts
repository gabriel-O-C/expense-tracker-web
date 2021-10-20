import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.dark_gray};
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  text-align: center;
  font-weight: 700;
`;