// import React from "react";
import { weddingData } from "../data/weddingData";
import "./Landing.css";
import { ChevronDown } from "lucide-react";

const newDate = new Date(weddingData.date.complete)
const monthAbbreviation = newDate.toLocaleString('default', { month: 'short' })
function Landing({
  firstName = weddingData.couple.groom.firstName,
  secondName = weddingData.couple.bride.firstName,
  // weddingDate = "02 · Dec · 2026",
  weddingDate = `${weddingData.date.date} · ${monthAbbreviation} · ${weddingData.date.year}`,
}) {
  return (
    <section id="home" className=" landing-section">
      <div className="landing-overlay" aria-hidden="true" />
      <div className="landing-frame" aria-hidden="true" />

      <div className="landing-content">
        <div>
          <p className="landing-eyebrow">The Wedding of</p>

          <h1 className="landing-names">
            <span>{firstName}</span>
            {/* <span>&</span> */}
            <span className="landing-ampersand">&amp;</span>

            <span>{secondName}</span>
          </h1>
          <p className="landing-eyebrow">{weddingDate}</p>
        </div>

        <div
          style={{
            // background: "red",
            height: 100,
            display: "flex",
            flexGrow: 1,
          }}
        ></div>
        <div className="scroll-button-container">
          <button
            className="scroll-button"
            onClick={() =>
              document.getElementById("wedding")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore our invitation
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
