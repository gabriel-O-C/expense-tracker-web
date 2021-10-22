import React from "react";
import { Container } from "./styles";
import { Item } from "../../types/Item";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2021, 10, 1),
      category: "food",
      title: "teste",
      value: 320.23,
    };
    onAdd(newItem);
  };
  return (
    <Container>
      <button onClick={handleAddEvent}>teste</button>
    </Container>
  );
};

export default InputArea;
