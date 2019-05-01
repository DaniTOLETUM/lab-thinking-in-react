import React from "react";
import "./ProductTable.css";

//Components
import ProductRow from "../ProductRow/ProductRow"

export default function ProductTable() {
  return (
    <div className="product-table">
      <p>PRODUCT TABLE</p>
      <ProductRow />
    </div>
  );
}
