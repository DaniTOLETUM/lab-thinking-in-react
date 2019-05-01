import React, { Component } from 'react';
import './App.css';

//Components
import SearchBar from "./components/SearchBar/SearchBar";
import ProductTable from "./components/ProductTable/ProductTable";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> IronSearch Engine</h1>
        <SearchBar />
        <ProductTable />

      </div>
    );
  }
}

export default App;
