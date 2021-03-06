import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as C from "./App.styles";
import { Header, InfoArea, InputArea, TableArea } from "./components";
import theme from "./styles/theme";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilters";
import { Item } from "./types/Item";
import { categories } from "./data/categories";
function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };
  return (
    <ThemeProvider theme={theme}>
      <C.Container>
        <Header />
        <C.Main>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
          <InputArea onAdd={handleAddItem} />
          <TableArea list={filteredList} />
        </C.Main>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
