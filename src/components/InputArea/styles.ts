import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.text};
  box-shadow: 0 0 5px ${(props) => props.theme.colors.light_gray};
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
`;

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  width: 100%;
  margin: 20px 0;
  transition: ease-in-out all .3s;
  &:hover{
    background-color: ${(props) => props.theme.colors.light_blue};
    color: black;
    font-weight: 700;
  }
`;

export const Label = styled.label`
  flex: 1;
  margin: 10px;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${(props) => props.theme.colors.light_gray};
    border-radius: 5px;

    &:focus{
    border: 1px solid lightblue;

    }
`;

export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${(props) => props.theme.colors.light_gray};
    border-radius: 5px;
    background-color: transparent;

    &:focus{
    border: 1px solid lightblue;

    }
`;