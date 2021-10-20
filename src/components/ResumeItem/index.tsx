import React from "react";
import { Container, Info, Title } from "./styles";

type Props = {
  title: string;
  value: number;
};
const ResumeItem = ({ title, value }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Info>$ {value}</Info>
    </Container>
  );
};

export default ResumeItem;
