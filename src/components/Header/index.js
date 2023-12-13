import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoIosContact } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import "./index.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const onChangeMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="nav-container">
      <nav className="nav-mobile-bg-container">
        <nav className="nav-mobile-view-continer">
          <h1>Portfolio</h1>
          <button
            type="button"
            className="nav-mobile-button"
            onClick={onChangeMenu}
          >
            <IoMdMenu className="nav-mobile-icon" />
          </button>
        </nav>
        {showMenu && (
          <ul className="sidebar-mobile-nav">
            <li>
              <Link to="/">
                <GoHome className="nav-li-icon" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FcAbout className="nav-li-icon" />
              </Link>
            </li>
            <li>
              <Link to="/education">
                <FcReadingEbook className="nav-li-icon" />
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <GiSkills className="nav-li-icon" />
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <GrProjects className="nav-li-icon" />
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <IoIosContact className="nav-li-icon" />
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <nav className="nav-desktop-bg-container">
        <div className="nav-desktop-container">
          <h1>Portfolio</h1>
          <ul className="ul-desktop-container">
            <li>
              <Link to="/" className="desktop-li-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="desktop-li-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/education" className="desktop-li-item">
                Education
              </Link>
            </li>
            <li>
              <Link to="/skills" className="desktop-li-item">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="desktop-li-item">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="desktop-li-item">
                ContactUs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}
export default Header;
