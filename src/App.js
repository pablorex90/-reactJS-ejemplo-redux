import React from 'react';
import './App.css';
import ComponentWithConnectionToRedux from './containers/Counter';

function App() {
  return (
    <div className="App">
      <ComponentWithConnectionToRedux></ComponentWithConnectionToRedux>
    </div>
  );
}

export default App;
