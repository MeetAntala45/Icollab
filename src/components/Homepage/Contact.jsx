import React from "react";
import "../../CSS/Homepage/contact.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-page">

      {/* Contact Form Section */}
      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer/>
    </div>
    </>
  );
};

export default Contact;
