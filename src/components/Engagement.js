import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "./Engagement.css";

// Replace these with your actual files
import couple1 from "../assets/images/Engagement/1.jpg";
import couple2 from "../assets/images/Engagement/2.jpg";
import couple3 from "../assets/images/Engagement/3.jpg";
import couple4 from "../assets/images/Engagement/4.jpg";

import familyPortrait from "../assets/images/Engagement/7-fam.jpg";
import familyLandscape from "../assets/images/Engagement/6-fam.jpg";

import mainCouple from "../assets/images/Engagement/proposal-pic.jpg";

import ringVideo from "../assets/images/Engagement/engagement-ring.mp4";
import proposalVideo from "../assets/images/Engagement/proposal-video.mp4";

export default function Engagement() {
  return (
    <Box className="engagement-page">

      {/* ==========================================
          INTRO
          ========================================== */}

      <section className="engagement-intro">
        <Container maxWidth="lg">
          <Box className="engagement-intro-content">

            <Typography className="engagement-eyebrow">
              And then, we said yes
            </Typography>

            <Typography className="engagement-title">
              Our next
              <em> chapter</em>
            </Typography>

            <Typography className="engagement-intro-text">
              13 years of friendship.
              <br />
              9 years of choosing each other as
              partners in this crazy little thing
              called love.
              <br />
              1 year of being engaged.
            </Typography>

          </Box>
        </Container>
      </section>

      {/* ==========================================
          MAIN COUPLE PHOTO
          ========================================== */}

      <section className="engagement-feature">
        <img
          src={mainCouple}
          alt="The couple"
          className="feature-image"
        />
      </section>

      {/* ==========================================
          COUPLE PORTRAITS
          ========================================== */}

      <section className="couple-section">
        <Container maxWidth="lg">

          <Box className="couple-grid">

            <img
              src={couple1}
              alt="Couple portrait"
              className="portrait portrait-1"
            />

            <img
              src={couple2}
              alt="Couple portrait"
              className="portrait portrait-2"
            />

            <Box className="couple-text">
              <Typography>
                And now, another beautiful reminder
                that love isn't just about finding the one—
              </Typography>

              <Typography className="highlight-text">
                it's about choosing each other,
                every single day.
              </Typography>
            </Box>

            <img
              src={couple3}
              alt="Couple portrait"
              className="portrait portrait-3"
            />

            <img
              src={couple4}
              alt="Couple portrait"
              className="portrait portrait-4"
            />

          </Box>

        </Container>
      </section>

      {/* ==========================================
          FAMILY
          ========================================== */}

      <section className="family-section">
        <Container maxWidth="lg">

          <Box className="family-content">

            <Box className="family-heading">
              <Typography className="section-eyebrow">
                The people who made us
              </Typography>

              <Typography className="family-title">
                Love is never
                <em> just two people.</em>
              </Typography>
            </Box>

            <Box className="family-gallery">

              <img
                src={familyLandscape}
                alt="Family"
                className="family-landscape"
              />

              <img
                src={familyPortrait}
                alt="Family"
                className="family-portrait"
              />

            </Box>

          </Box>

        </Container>
      </section>

      {/* ==========================================
          RING
          ========================================== */}

      <section className="ring-section">

        <Typography className="section-eyebrow">
          One year of being engaged
        </Typography>

        <Typography className="ring-title">
          From friends,
          <br />
          to lovers,
          <br />
          to fiancés.
        </Typography>

        <Box className="ring-video-wrapper">
          <video
            className="ring-video"
            src={ringVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </Box>

      </section>

      {/* ==========================================
          PROPOSAL
          ========================================== */}

      <section className="proposal-section">

        <Box className="proposal-intro">

          <Typography className="section-eyebrow">
            The moment
          </Typography>

          <Typography className="proposal-title">
            And then...
          </Typography>

        </Box>

        <Box className="proposal-video-wrapper">
          <video
            className="proposal-video"
            src={proposalVideo}
            controls
            playsInline
            preload="metadata"
          />
        </Box>

        <Typography className="proposal-caption">
          ...and soon, husband and wife.
        </Typography>

      </section>

      {/* ==========================================
          FINAL
          ========================================== */}

      <section className="engagement-ending">

        <Typography className="ending-text">
          After all these years,
          <br />
          through every season,
          every laugh,
          every challenge,
          <br />
          and every version of ourselves—
        </Typography>

        <Typography className="ending-title">
          We'd still
          <em> choose each other.</em>
        </Typography>

        <Typography className="ending-subtitle">
          Today. Tomorrow.
          <br />
          And every day after.
        </Typography>

      </section>

    </Box>
  );
}