import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  // MobileStepper,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import './Carousel.css'

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

  const currentPhoto = photos[activeStep];

  const handleNext = () => {
    setSlideDirection("next");
    setActiveStep((prev) => (prev + 1) % photos.length);
  };

  const handlePrevious = () => {
    setSlideDirection("prev");
    setActiveStep(
      (prev) => (prev - 1 + photos.length) % photos.length
    );
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("next");
      setActiveStep((prev) => (prev + 1) % photos.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="wedding-carousel">
      <Box className="carousel-container">

        {/* BACKGROUND IMAGE */}
        <Box
          className="carousel-background"
          sx={{
            backgroundImage: `url(${currentPhoto.image})`,
          }}
        />

        {/* DARK OVERLAY */}
        <Box className="carousel-overlay" />

        {/* CONTENT */}
        <Box className={`carousel-content slide-${slideDirection}`} key={currentPhoto.image}>

          {/* FOREGROUND IMAGE */}
          <Box className="carousel-photo-frame">
            <img
              src={currentPhoto.image}
              alt={currentPhoto.title}
              className="carousel-photo"
            />
          </Box>

          {/* CAPTION */}
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

        {/* PREVIOUS */}
        <IconButton
          className="carousel-arrow carousel-arrow-left"
          onClick={handlePrevious}
          aria-label="Previous photo"
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        {/* NEXT */}
        <IconButton
          className="carousel-arrow carousel-arrow-right"
          onClick={handleNext}
          aria-label="Next photo"
        >
          <KeyboardArrowRightIcon />
        </IconButton>

        {/* DOTS */}
        {/* <MobileStepper
          variant="dots"
          steps={photos.length}
          position="static"
          activeStep={activeStep}
          backButton={null}
          nextButton={null}
          className="carousel-stepper"
        /> */}
        <Box className="carousel-stepper">
          {photos.map((photo, index) => (
            <button
              key={photo.image}
              className={`carousel-dot ${activeStep === index ? "active" : ""
                }`}
              onClick={() => {
                setSlideDirection(index > activeStep ? "next" : "prev");
                setActiveStep(index);
              }}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </Box>

      </Box>
    </section>
  );
}