import React, {useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import * as C from './App.styles'
import { Header } from './components';
import theme from './styles/theme';
import { items } from './data/items'
import { getCurrentMonth } from './helpers/dateFilters'
import { Item } from './types/Item';
function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  
  useEffect(() => {
    
  }, [list, currentMonth])
  return (
    <ThemeProvider theme={theme}>
      <C.Container>
        <Header />
        <C.Main>
          
        </C.Main>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
