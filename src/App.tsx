import React from 'react';
import './App.css';
import MainWindow from "./windows/main";

interface Props {}

function App({}: Props) {
  return (
    <div className="App">
      <MainWindow />
    </div>
  );
}

export default App;
