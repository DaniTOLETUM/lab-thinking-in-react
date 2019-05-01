import React from "react";
import "./ProductTable.css";

//Components
import ProductRow from "../ProductRow/ProductRow"

function ProductTable() {
  return (
    <div className="product-table">
      <p>PRODUCT TABLE</p>
      <ProductRow />
    </div>
  );
}

export default ProductTable