import React from "react";
import { useNavigate } from "react-router-dom";
import "./GalleryPreview.css";
import previewPhoto from "../assets/images/KDR-140.jpg";

const GalleryPreview = () => {
  const navigate = useNavigate();

  return (
    <div
      className="gallery-preview"
      onClick={() => navigate("/gallery")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          navigate("/gallery");
        }
      }}
    >
      <img
        src={previewPhoto}
        alt="gallery preview"
        className="gallery-preview-image"
      />


      <div className="gallery-preview-overlay">
        <div className="gallery-preview-text">
          <h2>Our Prenup Photos</h2>
          <p>Click to see more photos from our prenup shoot</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPreview;