import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./FooterCredits.css";

const FooterCredits = () => {
  return (
    <footer className="site-footer">
      <span>Made with love for ate & kuya ♡</span>
      <span>by Kate</span>

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

export default FooterCredits;