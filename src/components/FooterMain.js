import { useEffect, useRef } from "react";
import "./FooterMain.css";
import monogram from "../assets/images/monogram-vector.png";

const FooterMain = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("is-visible");
          observer.unobserve(footer);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-light footer-light-one"></div>
      <div className="footer-light footer-light-two"></div>

      <div className="footer-detail footer-detail-left"></div>
      <div className="footer-detail footer-detail-right"></div>

      <div className="footer-content">
        <div className="footer-monogram-wrapper">
          <span className="monogram-accent monogram-accent-left"></span>

          <span className="monogram-accent monogram-accent-right"></span>

          <img
            src={monogram}
            alt="D&K Monogram"
            className="footer-monogram"
          />
        </div>

        <div className="footer-name">
          <span className="name-line"></span>

          <h2>Daniel & Kaylene</h2>

          <span className="name-line"></span>
        </div>

        <small className="footer-date">
          02 Dec 2026
        </small>

        <div className="footer-hashtags">
          <small>#DJfoundtheKAYEtoforever</small>
          <small>#LovinKAYEeveryDJay</small>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;