import React, { useState } from 'react';
import { ShoppingCart, Search, User, Heart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="green">Buy</span><span className="black">Now</span>
        </div>

        <nav className="nav">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Product</Link>
          <Link to="/categories" className={location.pathname === "/categories" ? "active" : ""}>Categories</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        </nav>

     

        <div className="icons">
          <Link to="/login">
            <User className="icon" />
          </Link>
          <div className="cart-wrapper" onClick={onCartClick}>
            <ShoppingCart className="icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <input type="text" placeholder="Search Products....." />
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Product</Link>
          <Link to="/categories" className={location.pathname === "/categories" ? "active" : ""}>Categories</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;