import React, { useState } from "react";
import { Button, Container, Input, InputTitle, Label, Select } from "./styles";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);
  const [categoryField, setCategoryField] = useState("");

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido");
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <>
      <Container>
        <Label>
          <InputTitle>Data</InputTitle>
          <Input
            type="date"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          />
        </Label>
        <Label>
          <InputTitle>Categoria</InputTitle>
          <Select
            value={categoryField}
            onChange={(e) => setCategoryField(e.target.value)}
          >
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>
                  {categories[key].title}
                </option>
              ))}
            </>
          </Select>
        </Label>
        <Label>
          <InputTitle>Título</InputTitle>
          <Input
            type="text"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
          />
        </Label>
        <Label>
          <InputTitle>Valor</InputTitle>
          <Input
            type="number"
            value={valueField}
            onChange={(e) => setValueField(parseFloat(e.target.value))}
          />
        </Label>
      </Container>
      <Button onClick={handleAddEvent}>Adicionar</Button>
    </>
  );
};

export default InputArea;
