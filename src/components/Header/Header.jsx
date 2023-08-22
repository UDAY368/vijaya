import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./solar_logo.png" alt="logo" width={120} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <nav className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <Link to="home" smooth={true} duration={200}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={200}>
              About Us
            </Link>
            <Link to="products" smooth={true} duration={200}>
              Products
            </Link>
            <Link to="training" smooth={true} duration={200}>
              Training
            </Link>
            <Link to="testimonials" smooth={true} duration={200}>
              Testimonials
            </Link>
            <Link to="contact" smooth={true} duration={200}>
              Contact Us
            </Link>
          </nav>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
