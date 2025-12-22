import React from "react";
import Header from "../components/Header";

import "./About.css";

const About = () => {
  const stats = [
    { icon: "👥", label: "Happy Customers", value: "50,000+" },
    { icon: "🏆", label: "Years Experience", value: "10+" },
    { icon: "🌍", label: "Countries Served", value: "25+" },
    { icon: "❤️", label: "Products Sold", value: "1M+" }
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We constantly explore new technologies to improve your shopping experience."
    },
    {
      icon: "🤝",
      title: "Customer First",
      description:
        "Every decision we make starts with your needs and ends with your satisfaction."
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "We strive to reduce our environmental impact with eco-friendly practices."
    }
  ];

  return (
    <>
      <Header />
    <div>
      
      <section className="about-hero">
        <span className="about-badge">About Us</span>
        <h1>
          Building Better Shopping <span className="highlight">Experiences</span>
        </h1>
        <p>
          We're on a mission to make online shopping more personal, reliable, and enjoyable...
        </p>
      </section>

      <section className="about-stats">
        <div className="stat-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          What started as a small passion project in 2014 has grown into a thriving e-commerce
          platform serving customers across 25 countries. Our founder, Sarah Johnson, recognized
          a gap in the market for curated, high-quality products backed by exceptional customer service.
        </p>
        <p>
          From our humble beginnings in a small garage to our current headquarters, we've never
          lost sight of what matters most: our customers. Every product we select, every service
          we provide, and every innovation we pursue is driven by one simple question:
          <strong> "How can we make our customers' lives better?"</strong>
        </p>
        <p>
          Today, we're proud to be a sustainable, customer-first company that continues to grow while
          maintaining the personal touch and attention to detail that made us who we are.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="value-cards">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
