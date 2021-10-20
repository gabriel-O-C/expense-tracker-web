import React from "react";
import { Item } from "../../types/Item";
import { TableColumn, TableLine } from "./styles";
import { formatDate } from "../../helpers/dateFilters";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>{categories[item.category].title}</TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>{item.value}</TableColumn>
    </TableLine>
  );
};

export default TableItem;
