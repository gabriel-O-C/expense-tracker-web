import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as C from "./App.styles";
import { Header, InfoArea, TableArea } from "./components";
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
    let income = 0;
    let expense = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expense += filteredList[i].value;
      } else {
        income += filteredList[i].value;
      }
    }
    setIncome(income);
    setExpense(expense);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
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
          <TableArea list={filteredList} />
        </C.Main>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
