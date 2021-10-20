import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as C from "./App.styles";
import { Header, InfoArea, TableArea } from "./components";
import theme from "./styles/theme";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilters";
import { Item } from "./types/Item";
function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

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
          />
          <TableArea list={filteredList} />
        </C.Main>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
