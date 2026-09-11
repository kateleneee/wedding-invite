import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import "./WeddingPlaylist2.css"
import prenupTeaser from '../assets/videos/prenup-teaser.mp4'

const PLAYLIST_ID = "65Ly6Ol03LsxuDeprpcMfh";

export default function WeddingPlaylist() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Make sure the video actually exists
    if (!video) {
      return undefined;
    }

    // IntersectionObserver may not exist in some environments
    if (!("IntersectionObserver" in window)) {
      video.play().catch(() => { });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box className="wedding-page">

      {/* ================================
          BACKGROUND VIDEO
          ================================ */}

      <Box className="background-video-wrapper">
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={prenupTeaser}
        />
      </Box>
      {/* <source
         
        </video>

      {/* ================================
          MUSIC
          ================================ */}

      <Box
        component="section"
        id="music"
        className="music-section"
      >

        <Box className="floral-decoration floral-left" />

        <Box className="floral-decoration floral-right" />

        <Container maxWidth="md">

          <Box className="music-container">

            <Typography className="section-label">
              Press Play
            </Typography>

            <Typography
              component="h3"
              className="section-title"
            >
              Songs for{" "}

              <Box component="em">
                Forever
              </Box>
            </Typography>

            <Typography className="section-description">
              Our favorite melodies, gathered in one
              place — for dancing, remembering,
              and celebrating love.
            </Typography>

            {/* ================================
                SPOTIFY
                ================================ */}

            <Box className="spotify-card">

              <Box
                component="iframe"
                id="spotify-player"
                title="Our Wedding Playlist"
                src={
                  `https://open.spotify.com/embed/playlist/` +
                  `${PLAYLIST_ID}?utm_source=generator&theme=0`
                }
                allow="
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  fullscreen;
                  picture-in-picture
                "
                loading="lazy"
              />

            </Box>

          </Box>

        </Container>
      </Box>
    </Box>
  );
}