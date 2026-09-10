import "./FooterMain.css";
import monogram from "../assets/images/monogram-vector.png";

const FooterMain = () => {
  return (
    <footer className="footer">

      {/* Subtle background details */}
      <div className="footer-light footer-light-one"></div>
      <div className="footer-light footer-light-two"></div>

      <div className="footer-detail footer-detail-left"></div>
      <div className="footer-detail footer-detail-right"></div>

      <div className="footer-content">

        {/* Monogram */}
        <div className="footer-monogram-wrapper">
          <span className="monogram-accent monogram-accent-left"></span>
          <span className="monogram-accent monogram-accent-right"></span>

          <img
            src={monogram}
            alt="D&K Monogram"
            className="footer-monogram"
          />
        </div>

        {/* Couple Name */}
        <div className="footer-name">
          <span className="name-line"></span>

          <h2>Daniel & Kaylene</h2>

          <span className="name-line"></span>
        </div>

        {/* Wedding Date */}
        <small className="footer-date">
          02 Dec 2026
        </small>

        {/* Hashtags */}
        <div className="footer-hashtags">
          <small>#DJfoundtheKAYEtoforever</small>
          <small>#LovinKAYEeveryDJay</small>
        </div>

      </div>
    </footer>
  );
};

export default FooterMain;