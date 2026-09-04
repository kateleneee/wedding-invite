import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  MobileStepper,
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

  const maxSteps = photos.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  const currentPhoto = photos[activeStep];

  return (
    <section className="wedding-carousel">
      <Box className="carousel-wrapper">

        {/* IMAGE */}
        <Box
          className="carousel-image"
          sx={{
            backgroundImage: `url(${currentPhoto.image})`,
          }}
        >

          {/* Soft overlay */}
          <Box className="carousel-overlay" />

          {/* Caption */}
          <Box className="carousel-caption">
            <Typography className="carousel-eyebrow">
              OUR STORY
            </Typography>

            <Typography className="carousel-title">
              {currentPhoto.title}
            </Typography>

            <Box className="gold-divider" />

            <Typography className="carousel-description">
              {currentPhoto.caption}
            </Typography>
          </Box>

          {/* LEFT BUTTON */}
          <IconButton
            onClick={handleBack}
            className="carousel-arrow carousel-arrow-left"
            aria-label="Previous photo"
          >
            <KeyboardArrowLeftIcon />
          </IconButton>

          {/* RIGHT BUTTON */}
          <IconButton
            onClick={handleNext}
            className="carousel-arrow carousel-arrow-right"
            aria-label="Next photo"
          >
            <KeyboardArrowRightIcon />
          </IconButton>

          {/* STEP INDICATOR */}
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className="carousel-stepper"
            nextButton={null}
            backButton={null}
          />
        </Box>
      </Box>
    </section>
  );
}