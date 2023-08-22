import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div>
      <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
          {/* left side */}
          <div className="flexColStart f-left">
            <img src="./footer_logo.png" alt="logo" width={120} />
            <span>Make the sun works for you</span>
          </div>
          {/* middle section */}
          <nav className="flexColStart f-center">
            <span className="primaryText">Quick Links</span>
            <Link to="about" smooth={true} duration={200} className="footer-pointer">
              About Us
            </Link>
            <Link to="products" smooth={true} duration={200} className="footer-pointer">
              Products
            </Link>
            <Link to="training" smooth={true} duration={200} className="footer-pointer">
              Training
            </Link>
            <Link to="testimonials" smooth={true} duration={200} className="footer-pointer">
              Testimonials
            </Link>
          </nav>

          {/* right side */}
          <div className="flexColStart f-right">
            <span className="primaryText">Address</span>
            <span className="secondaryText">Near viswabharathi school</span>
            <span className="secondaryText">Matamveedi Junction</span>
            <span className="secondaryText">Narsannapeta</span>
            <span className="secondaryText">Srikakulam</span>
            <span className="secondaryText">Andhara Pradesh</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
