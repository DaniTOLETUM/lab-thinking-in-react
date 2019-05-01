import React from "react";
import "./ProductRow.css";

export default function ProductRow({ products }) {
  console.log(products.data)
  return (
    <div className="product-row">
      <ul className="product-list">
        {products.data.map((product, i) => (
          <li className="item" key={i}>
            {product.name}         </li>
        ))}
      </ul>
    </div>
  );
}
