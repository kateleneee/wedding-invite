import { useEffect, useState } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const colors = {
  powderBlue: "#DCEBF3",
  deepBlue: "#5E7690",
  butterYellow: "#F8EBAA",
  gold: "#D3B84C",
  cream: "#FAF9F0",
  text: "#66727A",
  muted: "#929B9F",
};

const WEDDING_DATE = new Date("2026-12-02T09:00:00");

const calculateTimeLeft = () => {
  const difference =
    WEDDING_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
};


/* =========================================
   COUNTDOWN UNIT
========================================= */

const CountdownUnit = ({ value, label }) => (
  <Box
    sx={{
      width: "100%",
      textAlign: "center",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography
      sx={{
        fontFamily:
          "'Cormorant Garamond', serif",

        fontSize: {
          xs: "2.15rem",
          sm: "3rem",
        },

        lineHeight: 0.9,

        fontWeight: 400,

        color: colors.deepBlue,

        fontVariantNumeric:
          "tabular-nums",

        letterSpacing: "-0.02em",

        whiteSpace: "nowrap",
      }}
    >
      {String(value).padStart(2, "0")}
    </Typography>

    <Typography
      sx={{
        mt: 1,

        fontFamily:
          "'Cormorant Garamond', serif",

        fontSize: {
          xs: "0.58rem",
          sm: "0.68rem",
        },

        letterSpacing: {
          xs: "0.1em",
          sm: "0.16em",
        },

        color: colors.muted,

        textTransform: "uppercase",

        whiteSpace: "nowrap",

        textAlign: "center",
      }}
    >
      {label}
    </Typography>
  </Box>
);

/* =========================================
   MAIN COMPONENT
========================================= */

export default function SaveTheDateNew() {
  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="wedding">

      <Box
        sx={{
          minHeight: "100svh",

          position: "relative",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          overflow: "hidden",

          px: {
            xs: 2,
            sm: 3,
          },

          py: {
            xs: 8,
            sm: 10,
          },

          background: `
            linear-gradient(
              145deg,
              #EAF3F8 0%,
              #F8F8F1 55%,
              #FFF8D9 100%
            )
          `,
        }}
      >

        {/* =================================
            DECORATIVE BACKGROUND ELEMENTS
        ================================= */}

        {/* Top left ribbon */}

        <Box
          sx={{
            position: "absolute",

            top: {
              xs: 35,
              sm: 55,
            },

            left: {
              xs: -8,
              sm: 30,
            },

            width: {
              xs: 90,
              sm: 120,
            },

            height: 45,

            opacity: 0.55,

            transform: "rotate(-18deg)",

            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",

              width: "70%",

              height: 18,

              border: `1px solid ${colors.gold}`,

              borderRadius:
                "50% 10px 50% 10px",

              transform: "rotate(25deg)",
            }}
          />

          <Box
            sx={{
              position: "absolute",

              left: 20,

              top: 15,

              width: "70%",

              height: 18,

              border: `1px solid ${colors.gold}`,

              borderRadius:
                "10px 50% 10px 50%",

              transform: "rotate(-25deg)",
            }}
          />
        </Box>


        {/* Top right church */}

        <Box
          sx={{
            position: "absolute",

            top: {
              xs: 30,
              sm: 50,
            },

            right: {
              xs: 25,
              sm: 60,
            },

            opacity: 0.35,

            transform:
              "rotate(4deg)",

            pointerEvents: "none",
          }}
        >
          <ChurchOutlinedIcon
            sx={{
              fontSize: {
                xs: 38,
                sm: 48,
              },

              color: colors.deepBlue,
            }}
          />
        </Box>


        {/* Tiny sparkle */}

        <AutoAwesomeRoundedIcon
          sx={{
            position: "absolute",

            top: "22%",

            left: {
              xs: "10%",
              sm: "18%",
            },

            fontSize: {
              xs: 15,
              sm: 19,
            },

            color: colors.gold,

            opacity: 0.5,
          }}
        />


        {/* Tiny heart */}

        <FavoriteBorderRoundedIcon
          sx={{
            position: "absolute",

            top: "28%",

            right: {
              xs: "9%",
              sm: "17%",
            },

            fontSize: {
              xs: 16,
              sm: 20,
            },

            color: "#B9A1A8",

            opacity: 0.4,

            transform:
              "rotate(-12deg)",
          }}
        />


        {/* Bottom decorative flowers */}

        <Typography
          sx={{
            position: "absolute",

            bottom: {
              xs: 28,
              sm: 45,
            },

            left: {
              xs: 18,
              sm: 50,
            },

            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
            },

            color: colors.gold,

            opacity: 0.4,
          }}
        >
          ✿
        </Typography>


        <Typography
          sx={{
            position: "absolute",

            bottom: {
              xs: 45,
              sm: 70,
            },

            right: {
              xs: 20,
              sm: 55,
            },

            fontSize: {
              xs: "1rem",
              sm: "1.3rem",
            },

            color: colors.deepBlue,

            opacity: 0.3,
          }}
        >
          ♡
        </Typography>


        {/* =================================
            CONTENT
        ================================= */}

        <Container
          maxWidth="sm"
          disableGutters
          sx={{
            position: "relative",

            zIndex: 2,

            textAlign: "center",
          }}
        >

          {/* TOP ICONS */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                width: "fit-content",
              }}
            >
              <AutoAwesomeRoundedIcon
                sx={{
                  width: 16,
                  height: 16,
                  color: colors.gold,
                }}
              />

              <ChurchOutlinedIcon
                sx={{
                  width: 22,
                  height: 22,
                  color: colors.deepBlue,
                }}
              />

              <FavoriteBorderRoundedIcon
                sx={{
                  width: 17,
                  height: 17,
                  color: colors.gold,
                }}
              />
            </Box>
          </Box>


          {/* EYEBROW */}

          <Typography
            sx={{
              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize: {
                xs: "0.65rem",
                sm: "0.72rem",
              },

              fontWeight: 600,

              letterSpacing:
                "0.3em",

              color: colors.deepBlue,

              textTransform: "uppercase",
            }}
          >
            The countdown begins
          </Typography>


          {/* MAIN TITLE */}

          <Typography
            component="h4"
            sx={{
              mt: 2.5,
              mb: 2,

              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize: {
                xs: "3.rem",
                sm: "4.5rem",
              },

              fontWeight: 400,

              lineHeight: 0.7,

              letterSpacing: "-0.025em",

              color: colors.deepBlue,
            }}
          >
            Until
            <br />

            <Box
              component="span"
              sx={{
                fontStyle: "italic",
              }}
            >
              forever
            </Box>
          </Typography>


          {/* DESCRIPTION */}

          <Typography
            sx={{
              maxWidth: 330,

              mx: "auto",

              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
              },

              lineHeight: 1.6,

              color: colors.text,
            }}
          >
            Counting down the days
            <br />
            until we say “I do.”
          </Typography>


          {/* =================================
              COUNTDOWN CARD
          ================================= */}

          <Box
            sx={{
              mt: {
                xs: 5,
                sm: 6,
              },

              position: "relative",

              px: {
                xs: 1,
                sm: 3,
              },

              py: {
                xs: 2.8,
                sm: 3.5,
              },

              backgroundColor:
                "rgba(255,255,255,0.62)",

              border:
                "1px solid rgba(94,118,144,0.12)",

              borderRadius: "18px",

              boxShadow:
                "0 12px 35px rgba(94,118,144,0.08)",

              backdropFilter:
                "blur(8px)",
            }}
          >

            {/* Tiny top ornament */}

            <Typography
              sx={{
                position: "absolute",

                top: -9,

                left: "50%",

                transform:
                  "translateX(-50%)",

                px: 1.5,

                background:
                  "#F4F5EF",

                fontSize: "0.75rem",

                color: colors.gold,

                lineHeight: 1,
              }}
            >
              ✦
            </Typography>


            <Box
              sx={{
                width: "100%",

                display: "grid",

                gridTemplateColumns:
                  "1fr auto 1fr auto 1fr auto 1fr",

                alignItems: "start",

                justifyItems: "center",

                maxWidth: {
                  xs: "360px",
                  sm: "430px",
                },

                mx: "auto",
              }}
            >
              <CountdownUnit
                value={timeLeft.days}
                label="Days"
              />

              <CountdownDivider />

              <CountdownUnit
                value={timeLeft.hours}
                label="Hours"
              />

              <CountdownDivider />

              <CountdownUnit
                value={timeLeft.minutes}
                label="Minutes"
              />

              <CountdownDivider />

              <CountdownUnit
                value={timeLeft.seconds}
                label="Seconds"
              />
            </Box>

          </Box>


          {/* =================================
              DATE
          ================================= */}

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: 4.5,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "330px",
                  sm: "430px",
                },

                display: "grid",

                gridTemplateColumns:
                  "1fr auto 1fr",

                alignItems: "center",

                columnGap: {
                  xs: 1.5,
                  sm: 2,
                },
              }}
            >
              {/* Left line */}
              <Box
                sx={{
                  height: "1px",
                  width: "100%",
                  backgroundColor:
                    "rgba(94,118,144,0.25)",
                }}
              />

              {/* Date */}
              <Typography
                sx={{
                  fontFamily:
                    "'Cormorant Garamond', serif",

                  fontSize: {
                    xs: "0.7rem",
                    sm: "0.8rem",
                  },

                  letterSpacing: {
                    xs: "0.12em",
                    sm: "0.15em",
                  },

                  color: colors.text,

                  whiteSpace: "nowrap",

                  textAlign: "center",
                }}
              >
                02 · DECEMBER · 2026
              </Typography>

              {/* Right line */}
              <Box
                sx={{
                  height: "1px",
                  width: "100%",
                  backgroundColor:
                    "rgba(94,118,144,0.25)",
                }}
              />
            </Box>
          </Box>


          {/* BOTTOM ORNAMENT */}

          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                width: "fit-content",
              }}
            >
              <Box
                sx={{
                  width: 35,
                  height: "1px",
                  backgroundColor: colors.gold,
                  opacity: 0.5,
                }}
              />

              <Typography
                sx={{
                  fontFamily:
                    "'Great Vibes', cursive",

                  fontSize: "1.3rem",

                  color: colors.gold,

                  lineHeight: 1,

                  whiteSpace: "nowrap",
                }}
              >
                with love
              </Typography>

              <Box
                sx={{
                  width: 35,
                  height: "1px",
                  backgroundColor: colors.gold,
                  opacity: 0.5,
                }}
              />
            </Box>
          </Box>

        </Container>

      </Box>

    </section>
  );
}


/* =========================================
   COUNTDOWN DIVIDER
========================================= */

function CountdownDivider() {
  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        height: "100%",

        pt: {
          xs: 0.1,
          sm: 0.4,
        },

        px: {
          xs: 0.25,
          sm: 0.5,
        },
      }}
    >
      <Typography
        sx={{
          fontFamily:
            "'Cormorant Garamond', serif",

          fontSize: {
            xs: "1.4rem",
            sm: "1.9rem",
          },

          lineHeight: 1,

          color: colors.gold,

          opacity: 0.65,
        }}
      >
        :
      </Typography>
    </Box>
  );
}