import React from "react";
import "./FloralVideo.css";
import prenupVideo from "../assets/videos/prenup-video.mp4";

const VIDEOGRAPHER_INFO = {
  name: "K D R photocinema",
  fb_link: "https://www.facebook.com/KDRPhotoCinema",
  video_link: "https://www.facebook.com/share/v/1BnKDkbq93/"
}
const FloralVideo = () => {
  return (
    <section className="floral-video-section">
      {/* Decorative flowers */}
      <div className="floral flower-top-left">✿</div>
      <div className="floral flower-top-right">❀</div>
      <div className="floral flower-bottom-left">❁</div>
      <div className="floral flower-bottom-right">✿</div>

      {/* Small decorative dots */}
      <span className="floral-dot dot-1"></span>
      <span className="floral-dot dot-2"></span>
      <span className="floral-dot dot-3"></span>

      <div className="floral-video-content">

        <p className="floral-eyebrow">
          A LITTLE MOMENT
        </p>

        <h2 className="floral-title">
          Moments to Remember
        </h2>

        <div className="floral-video-frame">

          <div className="floral-frame-inner">
            <video
              className="floral-video"
              src={prenupVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

          {/* Frame decorations */}
          <div className="frame-corner frame-corner-tl"></div>
          <div className="frame-corner frame-corner-tr"></div>
          <div className="frame-corner frame-corner-bl"></div>
          <div className="frame-corner frame-corner-br"></div>

        </div>

        <p className="floral-caption">
          A little glimpse of our favorite memories.
        </p>

        {/* Videographer Credit */}
        <div className="videographer-credit">
          <span>Video by</span>

          <a
            href={VIDEOGRAPHER_INFO.fb_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {VIDEOGRAPHER_INFO.name}
          </a>

          <span className="credit-divider">•</span>

          <a
            href={VIDEOGRAPHER_INFO.video_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View original video
          </a>
        </div>

      </div>
    </section>
  );
};

export default FloralVideo;