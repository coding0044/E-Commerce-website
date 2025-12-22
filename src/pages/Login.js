// src/pages/Login.js
import React, { useState } from "react";
import "./Login.css"; // import the CSS file
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="back-link">
          <Link to="/" className="back-text">
            <ArrowLeft size={16} /> <span>Back to Shop</span>
          </Link>
        </div>

        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-description">Sign in to your account to continue shopping</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="options-row">
              <label className="remember-checkbox">
                <input type="checkbox" />
                <span style={{width: "179px" , marginLeft: "-37px"}}>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Sign In</button>
          </form>

    <br /> <br />

          <p className="signup-text">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
          <br /> <br />

    </div>

    
  );
};

export default Login;
