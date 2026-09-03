import React from "react";
import "./Landing.css";
import { ChevronDown } from "lucide-react";

function Landing({
  coverImage,
  firstName = "Daniel",
  secondName = "Kaylene",
  weddingDate = "Dec 02, 2026",
}) {
  return (
    <section
      className="landing"
      // style={{
      //   backgroundImage: `url(${coverImage})`,

      // }}
    >
      {/* {coverImage} */}

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
