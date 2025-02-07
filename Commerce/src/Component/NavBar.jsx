import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ cartItemCount }) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">ShopEase</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Men">Men</Link></li>
          <li><Link to="/Women">Women</Link></li>
          <li><Link to="/Kids">Kids</Link></li>
        </ul>
        <div className="search-cart">
          <input type="text" placeholder="Search products..." />
          <Link to="/Cart">
            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
