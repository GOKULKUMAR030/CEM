import '../assets/css/Footer.css'; // Import your CSS file for styling
import {FaInstagram} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Corporate Events Management is a leading event planning company specializing in corporate events.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@corporateevents.com</p>
          <p>Phone: +91 890-177-4560</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media:</p>
          <div className="social-icons">
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaTwitter/></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Corporate Events Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
