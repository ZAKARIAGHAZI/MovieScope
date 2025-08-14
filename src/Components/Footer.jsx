import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-logo">
          <h2>MovieScope</h2>
          <p>Your gateway to trending movies & reviews.</p>
        </div>

        {/* Navigation Links */}
        <ul className="footer-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
        </ul>

        {/* Social Media */}
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MovieScope. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
