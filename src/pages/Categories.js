// src/pages/Categories.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Mail, Phone, MapPin, Clock, Shirt, Watch, Headphones, Home, Gamepad2, Car, Book, Dumbbell, HeartPulse, Baby } from "lucide-react";
import "./Categories.css";

const Categories = () => {
  const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Smartphones, laptops, tablets and more",
    icon: Headphones,
    productCount: 15,
    color: "blue",
  },
  {
    id: 2,
    name: "Clothing",
    description: "Fashion for men, women and kids",
    icon: Shirt,
    productCount: 12,
    color: "purple",
  },
  {
    id: 3,
    name: "Home & Garden",
    description: "Furniture, decor and outdoor items",
    icon: Home,
    productCount: 10,
    color: "green",
  },
  {
    id: 4,
    name: "Sports & Fitness",
    description: "Equipment and athletic wear",
    icon: Dumbbell,
    productCount: 8,
    color: "red",
  },
  {
    id: 5,
     name: "Beauty & Healthy",
     description: "Premium skincare, cosmetics, and wellness products",

     icon: HeartPulse,
    productCount: 5,
    color: "yellow",
  }

  ];

  return (
    <>
   <Header /> 
    <div className="categories-page">
      <header className="header">Shop by Category</header>
      <p className="description">
        Discover our wide range of product categories and find exactly what you're looking for.
      </p>

      <div className="grid">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="category-card"
            >
              <div className={`icon-circle ${category.color}`}>
                <Icon size={32} />
              </div>
              <h3>{category.name}</h3>
              <p className="text">{category.description}</p>
              <span className="badge">{category.productCount} products</span>
            </Link>
          );
        })}
      </div>

      <div className="banner">
        <h2>Can't find what you're looking for?</h2>
        <p>Browse all our products or use our search feature to find exactly what you need.</p>
        <Link to="/products" className="view-all-btn">
          View All Products
        </Link>
      </div>
    </div>
        </>

  );
};

export default Categories;
