import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurStoryPreview.css";

import storyCover from "../assets/images/CollegeDays/5.jpg";

const OurStoryPreview = () => {
  const navigate = useNavigate();

  const handleStoryClick = () => {
    sessionStorage.setItem(
      "inviteScrollPosition",
      window.scrollY.toString()
    );

    navigate("/our-story");
  };

  return (
    <section className="story-preview-section">
      <div
        className="story-preview-card"
        onClick={handleStoryClick}
        role="button"
        tabIndex={0}
        aria-label="Read our story"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleStoryClick();
          }
        }}
      >
        <img
          src={storyCover}
          alt="DJ and Kaye"
          className="story-preview-image"
        />

        <div className="story-preview-overlay">
          <div className="story-preview-content">
            <p className="story-preview-eyebrow">
              OUR STORY
            </p>

            <h2>
              Once Upon
              <br />
              a College Story
            </h2>

            <span className="story-preview-line" />

            <p className="story-preview-subtitle">
              Click to read our story
            </p>
          </div>
        </div>

        <span className="story-corner story-corner-tl" />
        <span className="story-corner story-corner-tr" />
        <span className="story-corner story-corner-bl" />
        <span className="story-corner story-corner-br" />
      </div>
    </section>
  );
};

export default OurStoryPreview;
