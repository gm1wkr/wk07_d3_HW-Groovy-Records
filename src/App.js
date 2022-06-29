import React from 'react';
import './App.css';
import Header from './components/Header';
import ChartContainer from './containers/ChartContainer';
import GenreContainer from './containers/GenreContainer';


function App() {
  return (
  <>
    
    <div className="App">
      <Header headerText="PopPickers Smash Hits" />
      <ChartContainer />
      <GenreContainer />
    </div>
  </>
  );
}

export default App;
