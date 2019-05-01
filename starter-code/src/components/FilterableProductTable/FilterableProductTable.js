import React from "react";
import "./FilterableProductTable.css";

//Components
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

function FilterableProductTable({ products }) {
  // console.log(products)
  return (
    <div className="filterable-product-table">
      <h1> IronSearch Engine</h1>
      <SearchBar />
      <ProductTable products={products} />

    </div>
  )
}

export default FilterableProductTable