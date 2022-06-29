import React from 'react';
import './App.css';
import ChartContainer from './containers/ChartContainer';
import GenreContainer from './containers/GenreContainer';


function App() {
  return (
  <>
    <h1>PopPickers - Chart Top 20</h1>
    <div className="App">
      <ChartContainer />
      <GenreContainer />
    </div>
  </>
  );
}

export default App;
