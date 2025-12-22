import React, { useState } from "react";
import "./Products.css";
import { ShoppingCart } from "lucide-react";
import Header from "../components/Header";

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
    // Here you would typically send the order to your backend
    console.log('Order submitted:', formData);
    onComplete();
  };

  return (
    <div className="checkout-form">
      <div className="cart-header">
        <h2>Checkout</h2>
        <button className="close-cart" onClick={onBack} style={{width: "100px"}}>← Back</button>
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
          <button className="close-confirmation" onClick={onClose} style={{width: "0" , marginLeft: "96px"}}>×</button>
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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart');

  const categories = [
    { id: "all", name: "All Products", count: 50 },
    { id: "electronics", name: "Electronics", count: 15 },
    { id: "clothing", name: "Clothing", count: 12 },
    { id: "home", name: "Home & Garden", count: 10 },
    { id: "sports", name: "Sports & Fitness", count: 8 },
    { id: "beauty", name: "Beauty & Healthy", count: 5 },
  ];

  const usdToPkr = (usd) => {
    const exchangeRate = 278;
    return Math.round(usd * exchangeRate).toLocaleString('en-PK');
  };

 
  const products = [
  // ============== ELECTRONICS (15 products) ==============
  {
    id: 1, name: "Wireless Headphones Pro", price: 99, originalPrice: 129, rating: 4.5, reviews: 215,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 2, name: "Smart Watch X3", price: 199, originalPrice: 249, rating: 4.2, reviews: 189,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 3, name: "Bluetooth Speaker Mini", price: 49, originalPrice: null, rating: 4.0, reviews: 132,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 4, name: "4K Action Camera", price: 199, originalPrice: 249, rating: 4.5, reviews: 178,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 5, name: "Fitness Tracker Band", price: 79, originalPrice: 99, rating: 4.1, reviews: 113,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 6, name: "Portable Charger 10000mAh", price: 29, originalPrice: 39, rating: 4.0, reviews: 98,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 7, name: "Wireless Gaming Mouse", price: 59, originalPrice: 79, rating: 4.4, reviews: 134,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 8, name: "Mechanical Keyboard", price: 89, originalPrice: 109, rating: 4.6, reviews: 201,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 9, name: "Tablet Pro 10.5\"", price: 349, originalPrice: 399, rating: 4.5, reviews: 167,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 10, name: "HD Webcam", price: 59, originalPrice: 79, rating: 4.3, reviews: 134,
    image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 11, name: "External SSD 1TB", price: 129, originalPrice: 149, rating: 4.7, reviews: 201,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 12, name: "Smart Plug", price: 24, originalPrice: 34, rating: 4.0, reviews: 87,
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 13, name: "Drone with Camera", price: 299, originalPrice: 349, rating: 4.6, reviews: 189,
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
  {
    id: 14, name: "VR Headset", price: 199, originalPrice: 249, rating: 4.4, reviews: 156,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },
   {
    id: 15, name: "Wireless Earbuds Sport", price: 89, originalPrice: 119, rating: 4.3, reviews: 142,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop",
    category: "electronics", inStock: true
  },

  // ============== CLOTHING (12 products) ==============
  {
    id: 16, 
    name: "Cashmere Scarf", 
    price: 89, 
    originalPrice: 109, 
    rating: 4.5, 
    reviews: 132,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop",
    category: "clothing", 
    inStock: true
  },
  {
    id: 17, 
    name: "Slim Fit Jeans", 
    price: 59, 
    originalPrice: 79, 
    rating: 4.4, 
    reviews: 187,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=300&fit=crop",
    category: "clothing", 
    inStock: true
  },
{
  id: 18,
  name: "Denim Jacket",
  price: 79,
  originalPrice: 99,
  rating: 4.6,
  reviews: 154,
  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&h=300&fit=crop",
  category: "clothing",
  inStock: true
}
,
{
  id: 19,
  name: "Silk Necktie",
  price: 39,
  originalPrice: 59,
  rating: 4.7,
  reviews: 112,
 image: "/images/Silk_Necktie.jpeg", // Correct local path
  category: "clothing",
  inStock: true
}, 

 {
  id: 20,
  name: "Leather Driving Gloves",
  price: 45,
  originalPrice: 55,
  rating: 4.4,
  reviews: 112,
  image: "/images/driving-gloves.jpg", // Correct local path
  category: "clothing",
  inStock: true
},
  {
    
    id: 21, 
    name: "Cable Knit Cardigan", 
    price: 79, 
    originalPrice: 99, 
    rating: 4.6, 
    reviews: 145,
  image: "/images/Cable_Knit_Cardigan.jpeg", // Correct local path
    category: "clothing", 
    inStock: true
  },
  {
    id: 22, 
    name: "Canvas Bucket Hat", 
    price: 29, 
    originalPrice: 39, 
    rating: 4.1, 
    reviews: 87,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop",
    category: "clothing", 
    inStock: true
  },
  {
    id: 23, 
    name: "High-Waist Leggings", 
    price: 44, 
    originalPrice: 54, 
    rating: 4.5, 
    reviews: 156,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=300&h=300&fit=crop",
    category: "clothing", 
    inStock: true
  },
  {
    id: 24, 
    name: "Linen Button-Up Shirt", 
    price: 49, 
    originalPrice: 59, 
    rating: 4.3, 
    reviews: 102,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300&h=300&fit=crop",
    category: "clothing", 
    inStock: true
  },
  {
    id: 25, 
    name: "Distressed Denim Jacket", 
    price: 89, 
    originalPrice: 109, 
    rating: 4.5, 
    reviews: 134,
     image: "/images/Distressed_Denim_Jacket.jpeg", // Correct local path
    category: "clothing", 
    inStock: true
  },

  {
    id: 26, 
    name: "Organic Cotton Tee", 
    price: 24, 
    originalPrice: 34, 
    rating: 4.2, 
    reviews: 89,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop",
    category: "clothing", 
    inStock: true
  },
  {
    id: 27, 
    name: "Chunky Knit Sweater", 
    price: 59, 
    originalPrice: 79, 
    rating: 4.4, 
    reviews: 121,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=300&fit=crop",
    category: "clothing", 
    inStock: true
  },
  // ============== HOME & GARDEN (10 products) ==============
  {
    
    id: 28, name: "Premium Coffee Maker", price: 89, originalPrice: null, rating: 4.7, reviews: 156,
     image: "/images/Premium_Coffee_Maker.png", // Correct local path
    category: "home", inStock: true
  },
  {
    id: 29, name: "Chef's Knife Set", price: 129, originalPrice: 159, rating: 4.8, reviews: 204,
     image: "/images/Knife.jpeg", 
    category: "home", inStock: true
  },
  {
    id: 30, name: "Air Fryer", price: 99, originalPrice: 129, rating: 4.6, reviews: 189,
     image: "/images/Air.jpeg", 
    category: "home", inStock: true
  },
  {
    id: 31, name: "Blender Pro", price: 79, originalPrice: 99, rating: 4.4, reviews: 156,
     image: "/images/Pro.jpeg", 
    category: "home", inStock: true
  },
  {
    id: 32, name: "Toaster Oven", price: 59, originalPrice: 79, rating: 4.3, reviews: 134,
     image: "/images/over.jpg", 
    category: "home", inStock: true
  },
  {
    
    id: 33, name: "Slow Cooker", price: 49, originalPrice: 69, rating: 4.5, reviews: 167,
     image: "/images/slow.jpg", 
    category: "home", inStock: true
  },
  {
    id: 34, name: "Electric Kettle", price: 39, originalPrice: 49, rating: 4.3, reviews: 134,
     image: "/images/electric.jpg", 
    category: "home", inStock: true
  },
  {
    id: 35, name: "Non-Stick Pan Set", price: 99, originalPrice: 129, rating: 4.6, reviews: 189,
     image: "/images/pan.jpg", 
    category: "home", inStock: true
  },
  {
    id: 36, name: "Glass Food Storage", price: 39, originalPrice: 49, rating: 4.3, reviews: 156,
     image: "/images/food.jpg", 
    category: "home", inStock: true
  },
  {
    id: 37, name: "Gardening Tool Set", price: 9, originalPrice: 59, rating: 4.4, reviews: 167,
     image: "/images/set.jpg", 
    category: "home", inStock: true
  },

  // ============== SPORTS & FITNESS (8 products) ==============
    {
    id: 38, name: "Professional Yoga Mat", price: 29, originalPrice: 39, rating: 4.4, reviews: 87,
     image: "/images/yoge.jpg", 
    category: "sports", inStock: true
  },
  {
    id: 39, name: "Dumbbell Set", price: 79, originalPrice: 99, rating: 4.5, reviews: 178,
     image: "/images/bell.png", 
    category: "sports", inStock: true
  },
  {
    id: 40, name: "Resistance Bands Set", price: 29, originalPrice: 39, rating: 4.3, reviews: 134,
     image: "/images/brand.jpg", 
    category: "sports", inStock: true
  },
  {
    id: 41, name: "Foam Roller", price: 24, originalPrice: 34, rating: 4.4, reviews: 156,
     image: "/images/roller.jpeg", 
    category: "sports", inStock: true
  },
  {
    id: 42, name: "Kettlebell", price: 49, originalPrice: 59, rating: 4.5, reviews: 167,
     image: "/images/kettlebell.jpg", 
    category: "sports", inStock: true
  },
  {
    id: 43, name: "Pull-Up Bar", price: 39, originalPrice: 49, rating: 4.4, reviews: 156,
     image: "/images/pull.png", 
    category: "sports", inStock: true
  },
  {
    id: 44, name: "Boxing Gloves", price: 49, originalPrice: 59, rating: 4.5, reviews: 167,
     image: "/images/boxing.jpeg", 
    category: "sports", inStock: true
  },
  {
    id: 45, name: "Stationary Bike", price: 299, originalPrice: 349, rating: 4.5, reviews: 189,
     image: "/images/bike.png", 
    category: "sports", inStock: true
  },
  // ============== BEAUTY & HEALTHY (5 products) ==============
  {
    id: 46, name: "Facial Cleansing Brush", price: 29, originalPrice: 39, rating: 4.2, reviews: 98,
     image: "/images/face.jpeg", 
    category: "beauty", inStock: true
  },
  {
    id: 47, name: "Organic Face Cream", price: 24, originalPrice: 34, rating: 4.5, reviews: 167,
     image: "/images/skin.png", 
    category: "beauty", inStock: true
  },
  {
    id: 48, name: "Electric Toothbrush", price: 79, originalPrice: 99, rating: 4.6, reviews: 189,

     image: "/images/toot.jpeg", 
    category: "beauty", inStock: true
    
  },
  {
    id: 49, name: "Makeup Brush Set", price: 39, originalPrice: 49, rating: 4.4, reviews: 167,
     image: "/images/markupset.jpg", 
    category: "beauty", inStock: true
  },
  {
    id: 50, name: "Hair Straightener", price: 69, originalPrice: 89, rating: 4.3, reviews: 156,
     image: "/images/hair.png", 
    category: "beauty", inStock: true
  }
];

  const filteredProducts = products.filter((product) => {
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

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(p => p.id === productId);
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

  const toggleCart = () => {
    setShowCart(!showCart);
    if (!showCart) {
      setCheckoutStep('cart');
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="app-container">
      <Header cartCount={cartCount} onCartClick={toggleCart} />
      
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

      <div className="main-container">
        <aside className="sidebar">
          <h3 className="sidebar-title">Categories</h3>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`sidebar-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
              <span className="badge-count">{cat.count}</span>
            </button>
          ))}
        </aside>

        <div className="products-section">
          <div className="topbar">
            <h2 className="results-count">Showing {sortedProducts.length} of {products.length} products</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Products;