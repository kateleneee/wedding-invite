import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./CreditsFooter.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <span>Created with love for ate & kuya ♡</span>
      <span>Made by Kate</span>

      <a
        href="https://instagram.com/kateleneee"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-instagram"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>
    </footer>
  );
};

export default Footer;