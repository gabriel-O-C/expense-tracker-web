/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as C from './App.styles'
import { Header } from './components';
import theme from './styles/theme';
function App() {
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
