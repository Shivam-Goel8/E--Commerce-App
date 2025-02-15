import { useState, useEffect } from "react";
import axios from "axios";

const Men = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
    axios.get("https://fakestoreapi.com/products/category/men%27s%20clothing")


      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          setError("Invalid data format from API");
        }
        setLoading(false);
        console.log("https://fakestoreapi.com/products/category/men's clothing");
      })
      .catch((err) => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h2 className="heading">Men's Products</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">₹{(product.price * 83).toFixed(2)}</p>
              <p className="cart-price"></p>
              <button onClick={() => addToCart(product)} className="add-to-cart">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Men;
