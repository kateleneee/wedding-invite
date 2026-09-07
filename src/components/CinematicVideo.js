import React from "react";
import "./CinematicVideo.css";
import prenupVideo from "../assets/videos/prenup-video.mp4";
import prenupTeaser from "../assets/videos/prenup-teaser.mp4";

const CinematicVideo = () => {
  return (
    <section className="cinematic-video-section">

      {/* =====================================
          BACKGROUND VIDEO
      ===================================== */}

      {/* <video
        className="cinematic-background"
        src={prenupTeaser}
        autoPlay
        muted
        loop
        playsInline
      /> */}

      {/* =====================================
          DIM OVERLAY
      ===================================== */}

      <div className="cinematic-overlay"></div>


      {/* =====================================
          DECORATIVE FLOWERS
      ===================================== */}

      <div className="cinematic-flower cinematic-flower-left">
        ✿
      </div>

      <div className="cinematic-flower cinematic-flower-right">
        ❀
      </div>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="cinematic-content">

        <p className="cinematic-eyebrow">
          OUR STORY
        </p>

        <h2 className="cinematic-title">
          A Moment in Time
        </h2>


        {/* ===================================
            MAIN VIDEO
        =================================== */}

        <div className="cinematic-video-wrapper">

          <div className="cinematic-video-border">

            <video
              className="cinematic-main-video"
              src={prenupVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
            />

          </div>

          {/* Yellow accent */}
          <div className="cinematic-accent"></div>

        </div>


        <p className="cinematic-caption">
          And so our next chapter begins.
        </p>

      </div>

    </section>
  );
};

export default CinematicVideo;