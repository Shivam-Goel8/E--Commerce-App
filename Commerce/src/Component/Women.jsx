import React, { useState, useEffect } from "react";
import axios from "axios";

function Women({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing") // Fetch Women's products API
      .then((res) => {
        setProducts(res.data); // Set the fetched data
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2 className="heading">Women's Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
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

export default Women;
