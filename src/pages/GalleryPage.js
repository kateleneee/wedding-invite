import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fab, Tooltip } from "@mui/material";

import Gallery from "../components/Gallery";
import "./GalleryPage.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const GalleryPage = () => {
  const navigate = useNavigate();

  // Automatically go to the top when entering the gallery page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="gallery-page">
      <Tooltip title="Back to envelope" placement="left">
        <Fab
          aria-label="Back to envelope"
          onClick={handleBack}
          sx={{
            position: "fixed",
            right: { xs: 16, sm: 24 },
            bottom: { xs: 16, sm: 24 },
            zIndex: 999,

            width: { xs: 48, sm: 56 },
            height: { xs: 48, sm: 56 },

            backgroundColor: "#c7dce8",
            color: "#435c68",

            boxShadow: "0 8px 25px rgba(67, 83, 91, 0.20)",

            "&:hover": {
              backgroundColor: "#b8d2df",
              boxShadow: "0 12px 30px rgba(67, 83, 91, 0.25)",
            },

            "&:active": {
              transform: "scale(0.95)",
            },
          }}
        >
          <ArrowBackRoundedIcon />
        </Fab>
      </Tooltip>

      <Gallery />
    </div>
  );
};

export default GalleryPage;
