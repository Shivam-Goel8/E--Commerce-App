import React, { useState } from "react";
import kidsProducts from '../Component/kidsData'; // Import the dummy data

function Kids({ addToCart }) {
  const [products] = useState(kidsProducts);

  return (
    <div className="container">
      <h2 className="heading">Kids' Clothing</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">₹{(product.price * 83).toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;
