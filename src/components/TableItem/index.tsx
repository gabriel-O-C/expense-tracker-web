import React from "react";
import { Item } from "../../types/Item";
import { Category, TableColumn, TableLine, Value } from "./styles";
import { formatDate } from "../../helpers/dateFilters";
import { categories } from "../../data/categories";
import theme from "../../styles/theme";

type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <Value
          color={
            categories[item.category].expense
              ? theme.colors.red
              : theme.colors.green
          }
        >
          R$ {item.value}
        </Value>
      </TableColumn>
    </TableLine>
  );
};

export default TableItem;
