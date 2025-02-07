import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container">
      <h2 className="heading">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <h3 className="cart-title">{item.title}</h3>
                <p className="cart-price">${item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => {
                     // Debugging
                    removeFromCart(index);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
