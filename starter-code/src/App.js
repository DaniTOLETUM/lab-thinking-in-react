import React, { Component } from 'react';
import './App.css';
import data from "../src/data.json";

//Components
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

//Components



class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
