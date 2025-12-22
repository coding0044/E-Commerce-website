// src/pages/Home.js
import React, { useState } from "react";
import Header from "../components/Header";
import { ShoppingCart } from "lucide-react";
import "./HomePage.css";

const CheckoutForm = ({ cartTotal, usdToPkr, onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'credit-card'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    onComplete();
  };

  return (
    <div className="checkout-form">
      <div className="cart-header">
        <h2>Checkout</h2>
        <button className="close-cart" onClick={onBack} style={{width:"100px"}}>← Back</button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Shipping Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Address</label>
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Postal Code</label>
              <input 
                type="text" 
                name="postalCode" 
                value={formData.postalCode} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3>Payment Method</h3>
          <div className="payment-methods">
            <label className="payment-method">
              <input 
                type="radio" 
                name="paymentMethod" 
                value="credit-card" 
                checked={formData.paymentMethod === 'credit-card'}
                onChange={handleChange}
              />
              <span>Credit Card</span>
            </label>
            <label className="payment-method">
              <input 
                type="radio" 
                name="paymentMethod" 
                value="cash-on-delivery" 
                checked={formData.paymentMethod === 'cash-on-delivery'}
                onChange={handleChange}
              />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>
        
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>Rs. {usdToPkr(cartTotal)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Rs. {usdToPkr(5)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>Rs. {usdToPkr(cartTotal + 5)}</span>
          </div>
        </div>
        
        <button type="submit" className="checkout-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

const OrderConfirmation = ({ onClose }) => {
  return (
    <div className="confirmation">
      <div className="confirmation-content">
        <div className="confirmation-header">
          <h2>Order Confirmed!</h2>
          <button className="close-confirmation" onClick={onClose} style={{width: "20px" , marginRight: "-189px" , marginLeft: "121px"}}>×</button>
        </div>
        <div className="confirmation-body">
          <div className="confirmation-icon">✓</div>
          <h3>Thank you for your order!</h3>
          <p>Your order has been placed successfully. We'll send you a confirmation email shortly.</p>
          <button className="continue-shopping" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  // State management
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Sample product data
  const featuredProducts = [
    {
      id: 1, 
      name: "Wireless Headphones Pro", 
      price: 99, 
      originalPrice: 129, 
      rating: 4.5, 
      reviews: 215,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      category: "electronics", 
      inStock: true
    },
    {
      id: 2, 
      name: "Smart Watch X3", 
      price: 199, 
      originalPrice: 249, 
      rating: 4.2, 
      reviews: 189,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      category: "electronics", 
      inStock: true
    },
    {
      id: 3, 
      name: "Bluetooth Speaker Mini", 
      price: 49, 
      originalPrice: null, 
      rating: 4.0, 
      reviews: 132,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
      category: "electronics", 
      inStock: true
    },
    {
      id: 4, 
      name: "4K Action Camera", 
      price: 199, 
      originalPrice: 249, 
      rating: 4.5, 
      reviews: 178,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
      category: "electronics", 
      inStock: true
    },
    {
      id: 5, 
      name: "Fitness Tracker Band", 
      price: 79, 
      originalPrice: 99, 
      rating: 4.1, 
      reviews: 113,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      category: "electronics", 
      inStock: true
    }
  ];

  // Helper functions
  const usdToPkr = (usd) => {
    const exchangeRate = 278;
    return Math.round(usd * exchangeRate).toLocaleString('en-PK');
  };

  const toggleCart = () => {
    setShowCart(!showCart);
    if (!showCart) {
      setCheckoutStep('cart');
    }
  };

  const handleAddToCart = (productId) => {
    const productToAdd = featuredProducts.find(p => p.id === productId);
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Filter and sort products
  const filteredProducts = featuredProducts.filter((product) => {
    const matchCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      default: return 0;
    }
  });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="home-container">
      <Header cartCount={cartCount} onCartClick={toggleCart} />
      
      {/* Summer Sale Banner */}
      <main className="home-page">
        <div className="banner-container">
          <div className="banner-content">
            <h1 className="banner-title">SUMMER SALE</h1>
            <p className="banner-subtitle">Up to 50% Off Everything!</p>
            <div className="banner-highlights">
              <span className="banner-tag">Limited Time Offer</span>
              <span className="banner-tag">Free Shipping</span>
              <span className="banner-tag">Best Deals</span>
            </div>
            <button className="banner-button">Shop Now</button>
          </div>
        </div>
      </main>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <div className="controls">
            <input
              type="text"
              className="search-bar"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select 
              className="sort-dropdown"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-img" />
                {product.originalPrice && (
                  <span className="discount-badge">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              <div className="product-details">
                <div className="rating">
                  <span className="stars">{"★".repeat(Math.floor(product.rating))}</span>
                  <span className="review-count">({product.reviews})</span>
                </div>
                <h4 className="product-name">{product.name}</h4>
                <div className="price-section">
                  <span className="price">Rs. {usdToPkr(product.price)}</span>
                  {product.originalPrice && (
                    <span className="original-price">Rs. {usdToPkr(product.originalPrice)}</span>
                  )}
                </div>
                {product.inStock ? (
                  <button 
                    className="action-btn" 
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                ) : (
                  <button className="out-of-stock-btn" disabled>Out of Stock</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            {checkoutStep === 'cart' ? (
              <>
                <div className="cart-header">
                  <h2>Your Cart ({cartCount})</h2>
                  <button className="close-cart" onClick={toggleCart}>×</button>
                </div>
                
                {cart.length === 0 ? (
                  <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <button className="continue-shopping" onClick={toggleCart}>
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="cart-items">
                      {cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <img src={item.image} alt={item.name} className="cart-item-img" />
                          <div className="cart-item-details">
                            <h4>{item.name}</h4>
                            <p>Rs. {usdToPkr(item.price)}</p>
                            <div className="quantity-controls">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                −
                              </button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                +
                              </button>
                            </div>
                          </div>
                          <button 
                            className="remove-item"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="cart-footer">
                      <div className="cart-total">
                        <span>Subtotal:</span>
                        <span>Rs. {usdToPkr(cartTotal)}</span>
                      </div>
                      <div className="cart-actions">
                        <button 
                          className="checkout-btn" 
                          onClick={() => setCheckoutStep('checkout')}
                        >
                          Proceed to Checkout
                        </button>
                        <button className="continue-shopping" onClick={toggleCart}>
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : checkoutStep === 'checkout' ? (
              <CheckoutForm 
                cartTotal={cartTotal} 
                usdToPkr={usdToPkr}
                onBack={() => setCheckoutStep('cart')}
                onComplete={() => {
                  setCheckoutStep('confirmation');
                  setCart([]);
                }}
              />
            ) : (
              <OrderConfirmation onClose={() => {
                setCheckoutStep('cart');
                toggleCart();
              }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;