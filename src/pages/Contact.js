// src/pages/Contact.js
import React from "react";
import "./Contact.css";
import Header from "../components/Header";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
     <>
      <Header />
    <div className="contact-page">

      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you. Get in touch with our team for any questions or support.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Reach out to us through any of these channels</p>

              <div className="contact-card">
                <Mail className="contact-icon" />
                <div>
                  <p className="contact-label">Email</p>
                  <p>faraz.maju@gmail.com</p>
                </div>
              </div>

              <div className="contact-card">
                <Phone className="contact-icon" />
                <div>
                  <p className="contact-label">Phone</p>
                  <p>+923332853138</p>
                </div>
              </div>

              <div className="contact-card">
                <MapPin className="contact-icon" />
                <div>
                  <p className="contact-label">Address</p>
<p>Nursery Furniture Mart<br />Karachi, Pakistan</p>

                </div>
              </div>

              <div className="contact-card">
                <Clock className="contact-icon" />
                <div>
                  <p className="contact-label">Business Hours</p>
                  <p>Mon - Fri: 9AM - 6PM<br />Sat - Sun: 10AM - 4PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <p>Fill out the form and we'll get back to you soon.</p>

              <form>
                <div className="form-group two-column">
                  <div>
                    <label>First Name</label>
                    <input type="text" placeholder="Your first name" />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input type="text" placeholder="Your last name" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your.email@example.com" />
                </div>

                <div className="form-group">
  <label>Subject</label>
  <select>
    <option value="">Select a subject</option>
    <option value="general">General Inquiry</option>
    <option value="support">Support</option>
    <option value="order">Order Issue</option>
    <option value="feedback">Feedback</option>
    <option value="other">Other</option>
  </select>
</div>


                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us more about your inquiry..." rows="5" />
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </main>

    </div>
    </>
  );
};

export default Contact;
