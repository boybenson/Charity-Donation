import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="main__container">
      <footer>
        <div className="footer__items">
          <div className="footer__brand">
            <h2>Help❤️</h2>
          </div>
        </div>
        <div className="footer__items">
          <div className="footer__header">
            <div className="footer__header">
              <h3>Find Us</h3>
            </div>
            <div className="footer__features">
              <ul>
                <li>Accra, Ghana</li>
                <li>East Legon</li>
                <li>P. O. Box 201</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__items">
          <div className="footer__header">
            <h3>ABOUT US</h3>
          </div>
          <div className="footer__features">
            <ul>
              <li>Our Origin</li>
              <li>Our Board</li>
              <li>Brand Guidlines</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer__items">
          <div className="footer__socials">
            <FacebookIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <PinterestIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
