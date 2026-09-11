import React from "react";
import { Box, Container } from "@mui/material";
import "./AttireGuide.css";

import attireGuide from "../assets/images/attire-guide.png";

export default function AttireGuide() {
  return (
    <Box className="attire-page">

      <Box className="attire-border attire-border-top" />
      <Box className="attire-border attire-border-right" />
      <Box className="attire-border attire-border-bottom" />
      <Box className="attire-border attire-border-left" />

      <Container className="attire-container">

        <Box className="attire-image-wrapper">
          <img
            src={attireGuide}
            alt="Wedding attire guide"
            className="attire-image"
          />
        </Box>

      </Container>

    </Box>
  );
}
