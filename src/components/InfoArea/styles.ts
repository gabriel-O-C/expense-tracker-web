import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.text};
  box-shadow: 0px 0px 5px ${(props) => props.theme.colors.light_gray};
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const MonthTitle = styled.h1`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;
