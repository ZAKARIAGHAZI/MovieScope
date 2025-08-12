import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
            <path d="M7 21h10" />
            <rect width="20" height="14" x="2" y="3" rx="2" />
          </svg>
          <p>MovieScope</p>
        </div>

        {/* Hamburger Menu Button */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <div className={`navbar ${isOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#Movies">Movies</a>
            </li>
            <li>
              <a href="#AboutUs">About Us</a>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="seracbar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Movies Name" />
        </div>
      </div>
    </header>
  );
};

export default Header;
