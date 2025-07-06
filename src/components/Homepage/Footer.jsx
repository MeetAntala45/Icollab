import React from "react";
import "../../CSS/Homepage//footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = () => {
    alert('Newsletter subscription feature coming soon!');
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-column footer-brand">
          <div className="brand-logo">
            <h2>Icollab</h2>
            <div className="brand-accent"></div>
          </div>
          <p className="brand-description">
            Empowering teams with cutting-edge collaboration tools and seamless 
            productivity solutions for the modern workplace.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">
                <FaChevronRight className="link-icon" />
                Home
              </a>
            </li>
            <li>
              <a href="#features">
                <FaChevronRight className="link-icon" />
                Features
              </a>
            </li>
            <li>
              <a href="#about">
                <FaChevronRight className="link-icon" />
                About Us
              </a>
            </li>
            <li>
              <a href="#pricing">
                <FaChevronRight className="link-icon" />
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaChevronRight className="link-icon" />
                Contact
              </a>
            </li>
          </ul>
        </div>


        {/* Contact Info */}
        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Collaboration Street<br />New York, NY 10001</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>support@icollab.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-column footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <div className="newsletter-form">
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
              />
              <button onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
          <div className="newsletter-note">
            <small>We respect your privacy. Unsubscribe anytime.</small>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; 2024 Icollab. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;