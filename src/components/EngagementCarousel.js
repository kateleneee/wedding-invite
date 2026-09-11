import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "./EngagementCarousel.css";

import couple1 from "../assets/images/Engagement/1.jpg";
import couple2 from "../assets/images/Engagement/2.jpg";
import couple3 from "../assets/images/Engagement/3.jpg";
import couple4 from "../assets/images/Engagement/4.jpg";

import familyPortrait from "../assets/images/Engagement/7-fam.jpg";
import familyLandscape from "../assets/images/Engagement/6-fam.jpg";

import mainCouple from "../assets/images/Engagement/proposal-pic.jpg";

import ringVideo from "../assets/images/Engagement/engagement-ring.mp4";
import proposalVideo from "../assets/images/Engagement/proposal-video.mp4";

const slides = [
  {
    id: "couple",
    label: "Our Story",
  },
  {
    id: "family",
    label: "The People Who Made Us",
  },
  {
    id: "proposal",
    label: "The Moment",
  },
  {
    id: "forever",
    label: "And Now",
  },
];

export default function EngagementCarousel() {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const goToSlide = (index) => {
    if (index < 0) {
      setActive(slides.length - 1);
      return;
    }

    if (index >= slides.length) {
      setActive(0);
      return;
    }

    setActive(index);
  };

  const nextSlide = () => {
    goToSlide(active + 1);
  };

  const previousSlide = () => {
    goToSlide(active - 1);
  };

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEnd.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStart.current === null ||
      touchEnd.current === null
    ) {
      return;
    }

    const distance =
      touchStart.current - touchEnd.current;

    const minimumSwipe = 50;

    if (Math.abs(distance) > minimumSwipe) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <Box
      className="engagement-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Container maxWidth="xl" className="engagement-container">

        {/* ==========================================
            TOP
            ========================================== */}

        <Box className="engagement-header">
          <Typography className="engagement-eyebrow">
            Our Engagement
          </Typography>

          <Box className="slide-indicator">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={
                  active === index
                    ? "indicator active"
                    : "indicator"
                }
                aria-label={`Go to ${slide.label}`}
              />
            ))}
          </Box>
        </Box>

        {/* ==========================================
            CAROUSEL
            ========================================== */}

        <Box className="carousel-window">

          <Box
            className="carousel-track"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >

            {/* ======================================
                SLIDE 1 — COUPLE
                ====================================== */}

            <Box className="carousel-slide">

              <Box className="slide-layout">

                <Box className="slide-copy">

                  <Typography className="slide-label">
                    {slides[0].label}
                  </Typography>

                  <Typography className="slide-title">
                    13 years of friendship.
                  </Typography>

                  <Typography className="slide-text">
                    9 years of choosing each other
                    as partners in this crazy little
                    thing called love.
                    <br />
                    <br />
                    1 year of being engaged.
                  </Typography>

                  <Typography className="slide-accent">
                    And we'd still choose each other.
                  </Typography>

                </Box>

                {/* <Box className="couple-grid">

                  <img
                    src={couple1}
                    alt="Couple"
                  />

                  <img
                    src={couple2}
                    alt="Couple"
                  />

                  <img
                    src={couple3}
                    alt="Couple"
                  />

                  <img
                    src={couple4}
                    alt="Couple"
                  />

                </Box> */}
                <Box className="couple-grid">
                  <Box className="couple-grid-item">
                    <img src={couple1} alt="Couple" />
                  </Box>

                  <Box className="couple-grid-item">
                    <img src={couple2} alt="Couple" />
                  </Box>

                  <Box className="couple-grid-item">
                    <img src={couple3} alt="Couple" />
                  </Box>

                  <Box className="couple-grid-item">
                    <img src={couple4} alt="Couple" />
                  </Box>
                </Box>

              </Box>

            </Box>

            {/* ======================================
                SLIDE 2 — FAMILY + RING
                ====================================== */}

            <Box className="carousel-slide">

              <Box className="slide-layout">

                <Box className="slide-copy">

                  <Typography className="slide-label">
                    {slides[1].label}
                  </Typography>

                  <Typography className="slide-title">
                    Love is never
                    <br />
                    just two people.
                  </Typography>

                  <Typography className="slide-text">
                    It's the people, memories,
                    and moments that brought
                    us here.
                  </Typography>

                  <Typography className="slide-accent">
                    From friends, to lovers,
                    to fiancés.
                  </Typography>

                </Box>

                <Box className="family-ring-grid">

                  <img
                    src={familyLandscape}
                    alt="Family"
                    className="family-main"
                  />

                  <img
                    src={familyPortrait}
                    alt="Family"
                    className="family-small"
                  />

                  <Box className="ring-video">
                    <video
                      src={ringVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </Box>

                </Box>

              </Box>

            </Box>

            {/* ======================================
                SLIDE 3 — PROPOSAL
                ====================================== */}

            <Box className="carousel-slide">

              <Box className="proposal-layout">

                <Box className="proposal-copy">

                  <Typography className="slide-label">
                    {slides[2].label}
                  </Typography>

                  <Typography className="slide-title">
                    And then...
                  </Typography>

                  <Typography className="slide-text">
                    One beautiful question.
                    <br />
                    One unforgettable yes.
                  </Typography>

                </Box>

                <Box className="proposal-video">

                  <video
                    src={proposalVideo}
                    controls
                    playsInline
                    preload="metadata"
                  />

                </Box>

              </Box>

            </Box>

            {/* ======================================
                SLIDE 4 — FINAL PHOTO
                ====================================== */}

            <Box className="carousel-slide">

              <Box className="final-layout">

                <Box className="final-photo">

                  <img
                    src={mainCouple}
                    alt="The couple"
                  />

                </Box>

                <Box className="final-copy">

                  <Typography className="slide-label">
                    {slides[3].label}
                  </Typography>

                  <Typography className="final-title">
                    We'd still
                    <br />
                    <em>choose each other.</em>
                  </Typography>

                  <Typography className="slide-text">
                    After all these years,
                    through every season,
                    every laugh,
                    every challenge,
                    and every version of ourselves—
                  </Typography>

                  <Typography className="final-accent">
                    Today. Tomorrow.
                    <br />
                    And every day after.
                  </Typography>

                </Box>

              </Box>

            </Box>

          </Box>

        </Box>

        {/* ==========================================
            NAVIGATION
            ========================================== */}

        <Box className="carousel-navigation">

          <IconButton
            onClick={previousSlide}
            className="chevron"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon />
          </IconButton>

          <Typography className="slide-count">
            {String(active + 1).padStart(2, "0")}
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </Typography>

          <IconButton
            onClick={nextSlide}
            className="chevron"
            aria-label="Next slide"
          >
            <ChevronRightIcon />
          </IconButton>

        </Box>

      </Container>
    </Box>
  );
}