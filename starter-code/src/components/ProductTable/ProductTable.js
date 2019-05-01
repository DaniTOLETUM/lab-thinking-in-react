import React from "react";
import "./ProductTable.css";

//Components
import ProductRow from "../ProductRow/ProductRow"

function ProductTable({ products }) {
  // console.log(products)
  return (
    <div className="product-table">
      <p>PRODUCT TABLE</p>
      <ProductRow products={products} />
    </div>
  );
}

export default ProductTable