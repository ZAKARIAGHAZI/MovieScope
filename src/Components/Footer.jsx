import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#top-rated">Top Rated</a>
          </li>
          <li>
            <a href="#upcoming">Upcoming</a>
          </li>
        </ul>

        {/* Social Media */}
        <div className="footer-social">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MovieZone. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
