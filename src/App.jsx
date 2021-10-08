import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Board />

        <GlobalStyle />
      </> 
    </div>
  );
}

export default App;
