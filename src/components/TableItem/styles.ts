import styled from "styled-components";


export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
  margin-right: 10px;
`;

export const Category = styled.div<{ color: string}>`
  display: flex;
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${props => props.color};
  border-radius: 5px;
  text-align: center;
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color}
`;