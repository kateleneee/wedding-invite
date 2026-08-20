import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const colors = {
  powderBlue: "#DCEBF3",
  deepBlue: "#5E7690",
  butterYellow: "#F8EBAA",
  gold: "#D3B84C",
  cream: "#FAF9F0",
  text: "#66727A",
  pink: "#E9A8B5",
};

const songs = [
  {
    title: "Happy Ending",
    artist: "Rob Deniel",

    // Replace this with the Spotify track ID
    spotifyId: "1hv8gjkImdxHMw98bxXGre?si=GTENReQDTyeAp9c12ggQMg",

    accent: colors.powderBlue,
    icon: "♫",
  },

  {
    title: "How Did You Know",
    artist: "Gary Valenciano",

    spotifyId: "5LAufPjuQRvaU2DYRJRvb3?si=YAnlOsxgS1-CjoiKv43rDw",

    accent: colors.butterYellow,
    icon: "♡",
  },

  {
    title: "Through The Years",
    artist: "JK Labajo",

    spotifyId: "4CkwBFexkKpSVt76urws7y?si=oTZe6ct1S_W2kyQS2nkEHw",

    accent: "#F5D7DC",
    icon: "✦",
  },
];

export default function WeddingPlaylist() {
  return (
    <section id="playlist">

      <Box
        sx={{
          position: "relative",

          overflow: "hidden",

          py: {
            xs: 10,
            sm: 14,
          },

          backgroundColor:
            colors.powderBlue,
        }}
      >

        {/* ===============================
            FLOATING DECORATIONS
        =============================== */}

        <MusicNoteRoundedIcon
          className="playlist-float playlist-note"
          sx={{
            position: "absolute",

            top: "15%",
            left: "8%",

            fontSize: {
              xs: 20,
              sm: 28,
            },

            color: colors.gold,

            opacity: 0.45,
          }}
        />

        <FavoriteBorderRoundedIcon
          className="playlist-float playlist-heart"
          sx={{
            position: "absolute",

            top: "35%",
            right: "8%",

            fontSize: {
              xs: 18,
              sm: 25,
            },

            color: colors.pink,

            opacity: 0.5,
          }}
        />

        <AutoAwesomeRoundedIcon
          className="playlist-float playlist-star"
          sx={{
            position: "absolute",

            bottom: "15%",
            left: "12%",

            fontSize: {
              xs: 18,
              sm: 25,
            },

            color: colors.gold,

            opacity: 0.45,
          }}
        />


        {/* ===============================
            CONTENT
        =============================== */}

        <Container
          maxWidth="sm"
          sx={{
            position: "relative",

            zIndex: 2,

            textAlign: "center",
          }}
        >

          {/* Ornament */}

          <Box
            sx={{
              width: "100%",

              display: "flex",

              justifyContent: "center",

              mb: 2,
            }}
          >

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns:
                  "45px 24px 45px",

                alignItems: "center",

                justifyItems: "center",

                columnGap: 1,
              }}
            >

              <Box
                sx={{
                  width: "100%",
                  height: "1px",

                  backgroundColor:
                    colors.gold,

                  opacity: 0.7,
                }}
              />

              <MusicNoteRoundedIcon
                sx={{
                  width: 20,
                  height: 20,

                  color: colors.gold,
                }}
              />

              <Box
                sx={{
                  width: "100%",
                  height: "1px",

                  backgroundColor:
                    colors.gold,

                  opacity: 0.7,
                }}
              />

            </Box>

          </Box>


          {/* Eyebrow */}

          <Typography
            sx={{
              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize: "0.68rem",

              fontWeight: 600,

              letterSpacing:
                "0.3em",

              color: colors.deepBlue,

              textTransform:
                "uppercase",
            }}
          >
            Press play
          </Typography>


          {/* Heading */}

          <Typography
            component="h2"
            sx={{
              mt: 2,

              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize: {
                xs: "3.8rem",
                sm: "5rem",
              },

              fontWeight: 400,

              lineHeight: 0.85,

              color: colors.deepBlue,

              letterSpacing:
                "-0.02em",
            }}
          >
            A little
            <br />

            <Box
              component="span"
              sx={{
                fontStyle: "italic",
              }}
            >
              soundtrack
            </Box>
          </Typography>


          {/* Description */}

          <Typography
            sx={{
              mt: 2.5,

              maxWidth: 320,

              mx: "auto",

              fontFamily:
                "'Great Vibes', cursive",

              fontSize: {
                xs: "1.25rem",
                sm: "1.4rem",
              },

              color: colors.gold,
            }}
          >
            songs that remind us of love,
            laughter & forever
          </Typography>


          {/* ===============================
              SONGS
          =============================== */}

          <Stack
            spacing={2.5}
            sx={{
              mt: 6,

              textAlign: "left",
            }}
          >

            {songs.map((song, index) => (
              <SongCard
                key={song.spotifyId + index}
                song={song}
                index={index}
              />
            ))}

          </Stack>


          {/* Footer */}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"

            spacing={1}

            sx={{
              mt: 5,
            }}
          >

            <Box
              sx={{
                width: 30,
                height: "1px",

                backgroundColor:
                  colors.gold,

                opacity: 0.5,
              }}
            />

            <Typography
              sx={{
                fontFamily:
                  "'Great Vibes', cursive",

                fontSize: "1.2rem",

                color: colors.gold,
              }}
            >
              made with love
            </Typography>

            <Box
              sx={{
                width: 30,
                height: "1px",

                backgroundColor:
                  colors.gold,

                opacity: 0.5,
              }}
            />

          </Stack>

        </Container>

      </Box>

    </section>
  );
}


/* =========================================
   SONG CARD
========================================= */

function SongCard({ song, index }) {

  return (
    <Box
      sx={{
        position: "relative",

        backgroundColor:
          "rgba(250,249,240,0.85)",

        border:
          "1px solid rgba(94,118,144,0.12)",

        borderRadius:
          index % 2 === 0
            ? "8px 18px 8px 18px"
            : "18px 8px 18px 8px",

        overflow: "hidden",

        boxShadow:
          `5px 6px 0 ${song.accent}`,

        transform:
          index % 2 === 0
            ? "rotate(-0.5deg)"
            : "rotate(0.5deg)",

        transition:
          "transform 0.3s ease",

        "&:hover": {
          transform:
            "translateY(-4px) rotate(0deg)",
        },
      }}
    >

      {/* Decorative accent */}

      <Box
        sx={{
          position: "absolute",

          left: 0,
          top: 0,
          bottom: 0,

          width: 5,

          backgroundColor:
            song.accent,
        }}
      />


      {/* Song information */}

      <Box
        sx={{
          px: 2.5,
          pt: 2,
          pb: 1.5,
        }}
      >

        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
        >

          <Box
            sx={{
              width: 36,
              height: 36,

              flexShrink: 0,

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              borderRadius: "50%",

              backgroundColor:
                song.accent,
            }}
          >

            <Typography
              sx={{
                fontFamily:
                  "'Great Vibes', cursive",

                fontSize: "1.3rem",

                color: colors.deepBlue,
              }}
            >
              {song.icon}
            </Typography>

          </Box>


          <Box>
            <Typography
              sx={{
                fontFamily:
                  "'Cormorant Garamond', serif",

                fontSize: "1.2rem",

                fontWeight: 500,

                color: colors.deepBlue,

                lineHeight: 1,
              }}
            >
              {song.title}
            </Typography>

            <Typography
              sx={{
                mt: 0.3,

                fontFamily:
                  "'Cormorant Garamond', serif",

                fontSize: "0.8rem",

                color: colors.text,
              }}
            >
              {song.artist}
            </Typography>
          </Box>

        </Stack>

      </Box>


      {/* Spotify embed */}

      <Box
        sx={{
          px: {
            xs: 1.5,
            sm: 2,
          },

          pb: 1.5,
        }}
      >

        <Box
          component="iframe"

          src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}

          width="100%"

          height="80"

          frameBorder="0"

          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

          loading="lazy"

          sx={{
            display: "block",

            border: 0,

            borderRadius: "10px",
          }}
        />

      </Box>

    </Box>
  );
}