import React from 'react';
import { Header } from './components/Layout/Header';
import { Content } from './components/Layout/Content';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <Content/>
    </header>
  </div>
);