import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./ThroughTheYears.css";

// =========================================
// COLLEGE DAYS
// =========================================
import college1 from "../assets/images/CollegeDays/1.jpg";
import college2 from "../assets/images/CollegeDays/2.jpg";
import college3 from "../assets/images/CollegeDays/3.jpg";
import college4 from "../assets/images/CollegeDays/4.jpg";
import college5 from "../assets/images/CollegeDays/5.jpg";
// import college6 from "../assets/images/CollegeDays/6.jpg";
import college7 from "../assets/images/CollegeDays/7.jpg";
import college8 from "../assets/images/CollegeDays/8.jpg";
import college9 from "../assets/images/CollegeDays/9.jpg";
import college10 from "../assets/images/CollegeDays/10.jpg";
import college11 from "../assets/images/CollegeDays/11.jpg";

// =========================================
// GRADUATION DAYS
// =========================================
import graduation1 from "../assets/images/GraduationDay/1.jpg";
import graduation2 from "../assets/images/GraduationDay/2.jpg";
import graduation3 from "../assets/images/GraduationDay/3.jpg";
import graduation4 from "../assets/images/GraduationDay/4.jpg";

// =========================================
// OATHTAKING
// =========================================
import oathtaking1 from "../assets/images/OathtakingDays/1.jpg";
import oathtaking2 from "../assets/images/OathtakingDays/2.jpg";
import oathtaking3 from "../assets/images/OathtakingDays/3.jpg";
import oathtaking4 from "../assets/images/OathtakingDays/4.jpg";
import oathtaking5 from "../assets/images/OathtakingDays/5.jpg";
import oathtaking6 from "../assets/images/OathtakingDays/6.jpg";

// =========================================
// REVIEW
// =========================================
import review1 from "../assets/images/ReviewDays/1.jpg";
import review2 from "../assets/images/ReviewDays/2.jpg";
import review3 from "../assets/images/ReviewDays/3.jpg";
import review4 from "../assets/images/ReviewDays/4.jpg";
import review5 from "../assets/images/ReviewDays/5.jpg";
import review6 from "../assets/images/ReviewDays/6.jpg";

// =========================================
// WORK
// =========================================
import work1 from "../assets/images/WorkingEra/1.jpg";
import work2 from "../assets/images/WorkingEra/2.jpg";
import work3 from "../assets/images/WorkingEra/3.jpg";
import work4 from "../assets/images/WorkingEra/4.jpg";
import work5 from "../assets/images/WorkingEra/5.jpg";
import work6 from "../assets/images/WorkingEra/6.jpg";
import work7 from "../assets/images/WorkingEra/7.jpg";

// =========================================
// SICKNESS
// =========================================
import sickness1 from "../assets/images/Anorexia/1.jpg";
import sickness2 from "../assets/images/Anorexia/2.jpg";
import sickness3 from "../assets/images/Anorexia/3.jpg";
import sickness4 from "../assets/images/Anorexia/4.jpg";
import sickness5 from "../assets/images/Anorexia/5.jpg";
import sickness6 from "../assets/images/Anorexia/6.jpg";
import sickness7 from "../assets/images/Anorexia/7.jpg";
import sickness8 from "../assets/images/Anorexia/8.jpg";

// =========================================
// TRAVELS
// =========================================
import travel1 from "../assets/images/Travels/1.jpg";
import travel2 from "../assets/images/Travels/2.jpg";
import travel3 from "../assets/images/Travels/3.jpg";
import travel4 from "../assets/images/Travels/4.jpg";

// =========================================
// SPORTS
// =========================================
import sporty1 from "../assets/images/Sporty/1.jpg";
import sporty2 from "../assets/images/Sporty/2.jpg";
import sporty3 from "../assets/images/Sporty/3.jpg";
import sporty4 from "../assets/images/Sporty/4.jpg";
import sporty5 from "../assets/images/Sporty/5.jpg";
import sporty6 from "../assets/images/Sporty/6.jpg";
import sporty7 from "../assets/images/Sporty/7.jpg";

// =========================================
// LIFE
// =========================================
// import life1 from "../assets/images/LifeCelebrations/1.MP4";
// import life2 from "../assets/images/LifeCelebrations/2.HEIC";
// import life3 from "../assets/images/LifeCelebrations/3.MP4";
// import life4 from "../assets/images/LifeCelebrations/4.HEIC";
// import life5 from "../assets/images/LifeCelebrations/5.HEIC";
// import life6 from "../assets/images/LifeCelebrations/6.HEIC";
// import life7 from "../assets/images/LifeCelebrations/7.HEIC";
// import life8 from "../assets/images/LifeCelebrations/8.MOV";
// import life9 from "../assets/images/LifeCelebrations/9.HEIC";
// import life10 from "../assets/images/LifeCelebrations/10.HEIC";
// import life11 from "../assets/images/LifeCelebrations/11.HEIC";
// import life12 from "../assets/images/LifeCelebrations/12.MP4";
// import life13 from "../assets/images/Sporty/7.jpg";

const photoGroups = [
  {
    id: "college",
    title: "College Days",
    subtitle: "Where our story began",
    description: "Two college students, crossing paths and slowly becoming each other’s person.",
    photos: [
      college1,
      college2,
      college3,
      college4,
      college5,
      // college6,
      college7,
      college8,
      college9,
      college10,
      college11,
    ],
  },

  {
    id: "graduation",
    title: "Graduation Day",
    subtitle: "We made it out! Yay!",
    description: (
      <>
        We got our diplomas, celebrated our next chapter, and DJ got the answer to his prayers.{" "}
        <span className="highlight-text">
          Spoiler: it was Kaye, of course!
        </span>{" "}
        😂🙏
      </>
    ),
    // description: "We got our diplomas, celebrated our next chapter, and DJ got the answer to his prayers. <span> Spoiler: it was Kaye, of course! <span> 😂🙏",
    photos: [
      graduation1,
      graduation2,
      graduation3,
      graduation4,
    ],
  },

  {
    id: "review",
    title: "Review Days",
    subtitle: 'The "Sleepless" Era',
    description: "Through long review days and countless moments of doubt, we became each other’s constant source of support.",
    photos: [
      review1,
      review2,
      review3,
      review4,
      review5,
      review6,
    ],
  },

  {
    id: "oathtaking",
    title: "Oathtaking Era",
    subtitle: "Dreams officially unlocked...and so did the stress. Char!",
    description: "We got the title. We got the dream. We also got the stress. Hahaha! Good thing we got each other, too. 🤍",
    photos: [
      oathtaking1,
      oathtaking2,
      oathtaking3,
      oathtaking4,
      oathtaking5,
      oathtaking6,
    ],
  },

  {
    id: "working",
    title: "Working Era",
    subtitle: "Building our careers, building our lives.",
    description: "From first jobs to bigger dreams, we learned to navigate the real world while growing side by side.",
    photos: [
      work1,
      work2,
      work3,
      work4,
      work5,
      work6,
      work7,
    ],
  },

  {
    id: "sickness",
    title: "In Sickness and in Health",
    subtitle: "In Sickness and in Health",
    description: "A chapter of growing pains, struggles, lessons learned, and slowly becoming better—not just for ourselves, but for each other. 🤍",
    photos: [
      sickness1,
      sickness2,
      sickness3,
      sickness4,
      sickness5,
      sickness6,
      sickness7,
      sickness8,
    ],
  },

  {
    id: "travels",
    title: "Travels",
    subtitle: "Collecting places, stories, and memories.",
    description: "New places, new memories, and plenty of stories we’ll probably tell forever.",
    photos: [
      travel1,
      travel2,
      travel3,
      travel4,
    ],
  },
  {
    id: "sporty",
    title: "Sporty Era",
    subtitle: "Sweat, play, and a little friendly competition.",
    description: "We found new ways to have fun, stay active, and cheer each other on—on and off the court.",
    photos: [
      sporty1,
      sporty2,
      sporty3,
      sporty4,
      sporty5,
      sporty6,
      sporty7,
    ],
  },
  // {
  //   id: "life",
  //   title: "Life Celebrations",
  //   subtitle: "Celebrating life, love, and everything in between.",
  //   description: "The moments that made life ours. Birthdays, milestones, victories, little wins, and ordinary days that became extraordinary simply because we shared them.",
  //   photos: [
  //     life1,
  //     life2,
  //     life3,
  //     life4,
  //     life5,
  //     life6,
  //     life7,
  //     life8,
  //     life9,
  //     life10,
  //     life11,
  //     life12,
  //     life13
  //   ],
  // },
];


const ThroughTheYears = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      [
        ".our-story-header",
        ".story-card",
        // ".gallery-header",
        // ".story-gallery-photo",
        // ".story-photo-grid",
      ].join(", ")
    );

    if (!animatedElements.length) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          // Animate only once
          observerInstance.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  // =========================================
  // OPEN CATEGORY
  // =========================================

  const handleOpenGroup = (group) => {
    setSelectedGroup(group);
  };


  // =========================================
  // CLOSE CATEGORY
  // =========================================

  const handleCloseGroup = () => {
    setSelectedGroup(null);
  };


  // =========================================
  // OPEN LIGHTBOX
  // =========================================

  const handleOpenPhoto = (index) => {
    setSelectedPhoto(index);
  };


  // =========================================
  // CLOSE LIGHTBOX
  // =========================================

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };


  // =========================================
  // PREVIOUS PHOTO
  // =========================================

  const handlePrevious = (event) => {
    event.stopPropagation();

    if (!selectedGroup || selectedPhoto === null) return;

    setSelectedPhoto((current) =>
      current === 0
        ? selectedGroup.photos.length - 1
        : current - 1
    );
  };


  // =========================================
  // NEXT PHOTO
  // =========================================

  const handleNext = (event) => {
    event.stopPropagation();

    if (!selectedGroup || selectedPhoto === null) return;

    setSelectedPhoto((current) =>
      current === selectedGroup.photos.length - 1
        ? 0
        : current + 1
    );
  };


  return (
    <section className="our-story-section" id="our-story">

      {/* =====================================
          DECORATIVE ELEMENTS
      ===================================== */}

      <div className="story-decoration story-flower-left">
        ✿
      </div>

      <div className="story-decoration story-flower-right">
        ❀
      </div>

      <span className="story-dot story-dot-1" />
      <span className="story-dot story-dot-2" />
      <span className="story-dot story-dot-3" />


      {/* =====================================
          HEADER
      ===================================== */}

      <div className="our-story-header">

        <p className="our-story-eyebrow">
          OUR JOURNEY
        </p>

        <h2 className="our-story-title">
          Through The Years
        </h2>

        <p className="our-story-intro">
          A collection of the moments, places, and seasons
          that brought us here.
        </p>

      </div>


      {/* =====================================
          CATEGORY CARDS
      ===================================== */}

      <div className="story-grid">

        {photoGroups.map((group, index) => (

          <Box
            key={group.id}
            className={`story-card story-card-${index + 1}`}
            onClick={() => handleOpenGroup(group)}
          >

            {/* PHOTO */}

            <div className="story-card-photo">

              <img
                src={group.photos[0]}
                alt={group.title}
              />

              <div className="story-card-overlay">
                <span>View memories</span>
              </div>

            </div>


            {/* TEXT */}

            <div className="story-card-content">

              <span className="story-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {group.title}
              </h3>

              <p className="story-card-subtitle">
                {group.subtitle}
              </p>

              {/* DESCRIPTION */}
              <p className="story-card-description"> {group.description} </p>

              <span className="story-card-count">
                {group.photos.length} moments
              </span>

            </div>

          </Box>

        ))}

      </div>


      {/* =====================================
          GALLERY DIALOG
      ===================================== */}

      <Dialog
        open={Boolean(selectedGroup)}
        onClose={handleCloseGroup}
        fullWidth
        maxWidth="md"
        className="story-gallery-dialog"
      >

        <IconButton
          onClick={handleCloseGroup}
          className="gallery-close-button"
          aria-label="Close gallery"
        >
          <CloseIcon />
        </IconButton>


        {selectedGroup && (

          <DialogContent className="story-gallery-content">

            <div className="gallery-header">

              <p>
                {selectedGroup.photos.length} moments
              </p>

              <h2>
                {selectedGroup.title}
              </h2>

              <span>
                {selectedGroup.subtitle}
              </span>

            </div>


            {/* PHOTO GRID */}

            <div className="story-photo-grid">

              {selectedGroup.photos.map((photo, index) => (

                <button
                  key={index}
                  className="story-gallery-photo"
                  onClick={() => handleOpenPhoto(index)}
                >

                  <img
                    src={photo}
                    alt={`${selectedGroup.title} ${index + 1}`}
                  />

                </button>

              ))}

            </div>

          </DialogContent>

        )}

      </Dialog>


      {/* =====================================
          LIGHTBOX
      ===================================== */}

      <Dialog
        open={selectedPhoto !== null}
        onClose={handleClosePhoto}
        fullScreen
        className="story-lightbox"
      >

        <Box className="lightbox-container">

          {/* CLOSE */}

          <IconButton
            className="lightbox-close"
            onClick={handleClosePhoto}
            aria-label="Close photo"
          >
            <CloseIcon />
          </IconButton>


          {/* PREVIOUS */}

          <IconButton
            className="lightbox-arrow lightbox-prev"
            onClick={handlePrevious}
            aria-label="Previous photo"
          >
            <ArrowBackIosNewIcon />
          </IconButton>


          {/* IMAGE */}

          {selectedGroup && selectedPhoto !== null && (

            <img
              className="lightbox-image"
              src={selectedGroup.photos[selectedPhoto]}
              alt={`${selectedGroup.title} ${selectedPhoto + 1}`}
            />

          )}


          {/* NEXT */}

          <IconButton
            className="lightbox-arrow lightbox-next"
            onClick={handleNext}
            aria-label="Next photo"
          >
            <ArrowForwardIosIcon />
          </IconButton>


          {/* COUNTER */}

          {selectedGroup && selectedPhoto !== null && (

            <Typography className="lightbox-counter">
              {selectedPhoto + 1} / {selectedGroup.photos.length}
            </Typography>

          )}

        </Box>

      </Dialog>

    </section>
  );
};

export default ThroughTheYears;
