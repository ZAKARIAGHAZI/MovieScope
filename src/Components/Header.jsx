import { useState, useEffect } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Clear search input whenever the route changes
  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setIsOpen(false);
    }
  };

  return (
    <header>
      <div className="container">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
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

        {/* Hamburger Menu */}
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
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" onClick={() => setIsOpen(false)}>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={() => setIsOpen(false)}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <form className="seracbar" onSubmit={handleSearch}>
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Movies Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
