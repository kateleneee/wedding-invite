import React, { useEffect, useState } from "react";
import "./PhotoCarousel.css";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";

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


function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % photos.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + photos.length) % photos.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // AUTOPLAY
  useEffect(() => {
    // if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /*
    Calculates where each image should appear relative
    to the active image.

    Example:

    active = 2

    index 1 → previous
    index 2 → active
    index 3 → next
  */
  const getPosition = (index) => {
    let difference = index - activeIndex;

    // Handle circular positioning
    if (difference > photos.length / 2) {
      difference -= photos.length;
    }

    if (difference < -photos.length / 2) {
      difference += photos.length;
    }

    return difference;
  };

  return (
    <section className="photo-carousel">
      <div
        className="photo-carousel-container"
      // onMouseEnter={() => setIsPaused(true)}
      // onMouseLeave={() => setIsPaused(false)}
      >
        {/* HEADER */}
        <div className="photo-carousel-header">
          <span className="photo-carousel-eyebrow">
            OUR STORY
          </span>

          <h2 className="photo-carousel-title">
            Moments Along the Way
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="photo-carousel-stage">

          {photos.map((photo, index) => {
            const position = getPosition(index);

            return (
              <div
                key={photo.image}
                className={`carousel-slide ${position === 0
                  ? "carousel-slide-active"
                  : ""
                  } ${position === -1
                    ? "carousel-slide-prev"
                    : ""
                  } ${position === 1
                    ? "carousel-slide-next"
                    : ""
                  } ${Math.abs(position) > 1
                    ? "carousel-slide-hidden"
                    : ""
                  }`}
                onClick={() => {
                  if (position === -1) {
                    previousSlide();
                  } else if (position === 1) {
                    nextSlide();
                  } else if (position !== 0) {
                    goToSlide(index);
                  }
                }}
              >
                <div className="carousel-image-wrapper">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="carousel-image"
                  />
                </div>
              </div>
            );
          })}

          {/* LEFT ARROW */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={previousSlide}
            aria-label="Previous photo"
          >
            <span>←</span>
          </button>

          {/* RIGHT ARROW */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Next photo"
          >
            <span>→</span>
          </button>
        </div>

        {/* CAPTION */}
        <div
          className="carousel-caption"
          key={photos[activeIndex].image}
        >
          <h3>{photos[activeIndex].title}</h3>

          <div className="carousel-caption-line" />

          <p>{photos[activeIndex].caption}</p>
        </div>

        {/* DOTS */}
        <div className="carousel-indicators">
          {photos.map((photo, index) => (
            <button
              key={photo.image}
              className={`carousel-indicator ${activeIndex === index
                ? "carousel-indicator-active"
                : ""
                }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoCarousel;