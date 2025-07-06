import React from "react";
import "../../CSS/Homepage/footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-column footer-logo">
          <h2>Icollab</h2>
          <p>
            Your one-stop collaboration platform for teams and organizations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> 123 Collaboration St, NY
          </p>
          <p>
            <FaPhone /> +1 800 123 4567
          </p>
          <p>
            <FaEnvelope /> support@icollab.com
          </p>
        </div>

        {/* Newsletter + Social */}
        <div className="footer-column footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter to stay up to date.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>&copy; 2024 Icollab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
