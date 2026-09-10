import "./FooterMain.css";
import monogram from "../assets/images/monogram-vector.png";

const FooterMain = () => {
  return (
    <footer className="footer">
      <div className="footer-monogram-wrapper">
        <img
          src={monogram}
          alt="D&K Monogram"
          className="footer-monogram"
        />
      </div>

      <h2>Daniel & Kaylene</h2>

      <small className="footer-date">
        02 · Dec · 2026
      </small>

      <div className="footer-hashtags">
        <small>#DJfoundtheKAYEtoforever</small>
        <small>#LovinKAYEeveryDJay</small>
      </div>
    </footer>
  );
};

export default FooterMain;