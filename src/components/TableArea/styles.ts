import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spaces.small };
  box-shadow: 0 0 5px ${(props) => props.theme.colors.light_gray};
  border-radius: ${(props) => props.theme.spaces.small};
  margin-top: ${(props) => props.theme.spaces.small};

`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => props.width ? `${props.width}px` : 'auto'};
  padding: ${(props) => props.theme.spaces.small} 0;
  text-align: left;
`;