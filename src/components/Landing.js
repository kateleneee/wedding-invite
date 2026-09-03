import React from "react";
import "./Landing.css";
import { ChevronDown } from "lucide-react";

function Landing({
  coverImage,
  firstName = "Daniel",
  secondName = "Kaylene",
  weddingDate = "December 2, 2026",
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
        <p className="landing-eyebrow">Together with their families</p>

        <h1 className="landing-names">
          <span>{firstName}</span>

          <span className="landing-ampersand">&amp;</span>

          <span>{secondName}</span>
        </h1>

        <p className="landing-date">{weddingDate}</p>

        <p className="landing-invitation">
          Joyfully invite you to share in the celebration of their wedding day
        </p>
        {/* <button
          className="landing-button"
          onClick={() =>
            document.getElementById("wedding")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Explore Our Invitation
        </button> */}
        <button
          className="scroll-button"
          // onClick={() => scrollToSection("wedding")}
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
    </section>
  );
}

export default Landing;
