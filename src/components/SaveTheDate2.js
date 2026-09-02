
// import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
// import photo3 from "../assets/images/photo3.jpg";
// import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import "./SaveTheDate2.css";

export default function SaveTheDateS() {
  return (
    <section className="wedding-date" id="wedding">
      {/* asdasd */}
      {/* <p className="date-eyebrow">OUR WEDDING DAY</p> */}

      <div className="date-images">

        <div className="date-card">
          <img src={photo2} alt="" />
          <div className="date-number">12</div>
          <span>MONTH</span>
        </div>

        <div className="date-card">
          <img src={photo5} alt="" />
          <div className="date-number">02</div>
          <span>DAY</span>
        </div>

        <div className="date-card">
          <img src={photo6} alt="" />
          <div className="date-number">26</div>
          <span>YEAR</span>
        </div>

      </div>
    </section>
  )
}