import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";

import "./Carousel.css";

const photos = [
  {
    image: photo1,
    title: "A Beautiful Beginning",
    caption: "Every love story has a beginning, and ours starts here.",
  },
  {
    image: photo2,
    title: "The Little Moments",
    caption: "In the quiet moments, we found something beautiful.",
  },
  {
    image: photo3,
    title: "Side by Side",
    caption: "Wherever life takes us, we will always walk together.",
  },
  {
    image: photo4,
    title: "Our Favorite Place",
    caption: "Home has always been wherever we are together.",
  },
  {
    image: photo5,
    title: "Forever Starts Here",
    caption: "And now, we begin our forever.",
  },
];

export default function WeddingCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  // =========================================
  // SWIPE TRACKING
  // =========================================

  const touchStart = useRef({
    x: 0,
    y: 0,
  });

  const isSwiping = useRef(false);

  const currentPhoto = photos[activeStep];

  // =========================================
  // NAVIGATION
  // =========================================

  const handleNext = () => {
    setSlideDirection("next");

    setActiveStep((prev) => {
      return (prev + 1) % photos.length;
    });
  };

  const handlePrevious = () => {
    setSlideDirection("prev");

    setActiveStep((prev) => {
      return (prev - 1 + photos.length) % photos.length;
    });
  };

  const handleDotClick = (index) => {
    if (index === activeStep) return;

    setSlideDirection(index > activeStep ? "next" : "prev");
    setActiveStep(index);
  };

  // =========================================
  // TOUCH START
  // =========================================

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
    };

    isSwiping.current = false;
  };

  // =========================================
  // TOUCH MOVE
  // =========================================

  const handleTouchMove = (event) => {
    const touch = event.touches[0];

    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    /*
      Only consider this a swipe when horizontal
      movement is greater than vertical movement.
    */
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      isSwiping.current = true;
    }
  };

  // =========================================
  // TOUCH END
  // =========================================

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    const SWIPE_THRESHOLD = 50;

    /*
      Ignore vertical gestures.
      This allows normal page scrolling.
    */
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }

    /*
      Ignore very small movements.
    */
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) {
      return;
    }

    /*
      Swipe LEFT → NEXT
    */
    if (deltaX < 0) {
      handleNext();
    }

    /*
      Swipe RIGHT → PREVIOUS
    */
    if (deltaX > 0) {
      handlePrevious();
    }

    isSwiping.current = false;
  };

  // =========================================
  // AUTO PLAY
  // =========================================

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("next");

      setActiveStep((prev) => {
        return (prev + 1) % photos.length;
      });
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // =========================================
  // RENDER
  // =========================================

  return (
    <section className="wedding-carousel">
      <Box
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* =====================================
            BACKGROUND IMAGE
        ===================================== */}

        <Box
          className="carousel-background"
          sx={{
            backgroundImage: `url(${currentPhoto.image})`,
          }}
        />

        {/* =====================================
            OVERLAY
        ===================================== */}

        <Box className="carousel-overlay" />

        {/* =====================================
            CONTENT
        ===================================== */}

        <Box
          key={currentPhoto.image}
          className={`carousel-content slide-${slideDirection} `}
        >
          {/* ===================================
              FOREGROUND PHOTO
          =================================== */}

          <Box className="carousel-photo-frame">
            <img
              src={currentPhoto.image}
              alt={currentPhoto.title}
              className="carousel-photo"
              draggable="false"
            />
          </Box>

          {/* ===================================
              CAPTION
          =================================== */}

          <Box className="carousel-caption">
            <Typography className="carousel-eyebrow">
              OUR STORY
            </Typography>

            <Typography className="carousel-title">
              {currentPhoto.title}
            </Typography>

            <Box className="carousel-divider" />

            <Typography className="carousel-description">
              {currentPhoto.caption}
            </Typography>
          </Box>
        </Box>

        {/* =====================================
            PREVIOUS
        ===================================== */}

        <IconButton
          className="carousel-arrow carousel-arrow-left"
          onClick={handlePrevious}
          aria-label="Previous photo"
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        {/* =====================================
            NEXT
        ===================================== */}

        <IconButton
          className="carousel-arrow carousel-arrow-right"
          onClick={handleNext}
          aria-label="Next photo"
        >
          <KeyboardArrowRightIcon />
        </IconButton>

        {/* =====================================
            DOTS
        ===================================== */}

        <Box className="carousel-stepper">
          {photos.map((photo, index) => (
            <button
              key={photo.image}
              type="button"
              className={`carousel-dot ${activeStep === index ? "active" : ""
                } `}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to photo ${index + 1} `}
              aria-current={activeStep === index ? "true" : undefined}
            />
          ))}
        </Box>
      </Box>
    </section>
  );
}
