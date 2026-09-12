import React from "react";
import { useNavigate } from "react-router-dom";
import "./GalleryPreview2.css";

import prenupImage from "../assets/images/KDR-140.jpg";

const GalleryPreview2 = () => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    sessionStorage.setItem(
      "inviteScrollPosition",
      window.scrollY.toString()
    );

    navigate("/gallery");
  };

  return (
    <section className="photo-preview-section">
      <p className="photo-preview-title">
        OUR PRENUP GALLERY
      </p>
      <div
        className="photo-preview-frame"
        onClick={handleGalleryClick}
        role="button"
        tabIndex={0}
        aria-label="View prenup photo gallery"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleGalleryClick();
          }
        }}
      >
        <img
          className="photo-preview-image"
          src={prenupImage}
          alt="Our prenup photos"
        />

        <div className="photo-preview-overlay">
          <div className="photo-preview-content">
            {/* <p className="photo-preview-eyebrow">
              A LITTLE BIT MORE OF US
            </p> */}


            <h2>PRENUP PHOTOS</h2>
            <span className="photo-preview-line"></span>

            <p className="photo-preview-subtitle">
              Click to see photos from our shoot
            </p>
          </div>
        </div>

        <div className="photo-frame-corner photo-frame-corner-tl" />
        <div className="photo-frame-corner photo-frame-corner-tr" />
        <div className="photo-frame-corner photo-frame-corner-bl" />
        <div className="photo-frame-corner photo-frame-corner-br" />
      </div>
    </section>
  );
};

export default GalleryPreview2;
