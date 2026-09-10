import { ExternalLink } from "lucide-react";
import sketch1 from "../assets/images/sketch-1.png"
import sketch2 from "../assets/images/sketch-2.png"
import sketch3 from "../assets/images/sketch-3.png"
import backgroundImage from "../assets/images/washed-bg.png"
import './RSVP.css'

export default function RSVP() {
  return (
    <section id="rsvp" className="section rsvp-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="section-label">RSVP</div>

      <h2>
        Will you join
        <br />
        us?
      </h2>

      <div className="image-divider">
        <img src={sketch1} alt="" aria-hidden="true" />
        <img src={sketch2} alt="" aria-hidden="true" />
        <img src={sketch3} alt="" aria-hidden="true" />
      </div>
      <br />
      <p>We'd love to celebrate this special day with you.</p>

      <div className="rsvp-card">
        <h3>Kindly respond by</h3>

        <strong>October 15, 2026</strong>

        <p>Please let us know if you'll be able to celebrate with us.</p>

        <a
          className="primary-button"
          href="https://forms.google.com"
          target="_blank"
          rel="noreferrer"
        >
          RSVP Now
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
