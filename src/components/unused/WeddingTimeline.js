import { Box, Container, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";

import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
// import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";

import "./WeddingTimeline.css";

const colors = {
  powderBlue: "#DCEBF3",
  deepBlue: "#5E7690",
  butterYellow: "#F8EBAA",
  brightYellow: "#FFE56B",
  gold: "#D3B84C",
  cream: "#FAF9F0",
  text: "#66727A",

  // Stronger accent colors
  pink: "#E9A8B5",
  coral: "#E88F82",
  lavender: "#B7A7D9",
  green: "#91B8A0",
};

const events = [
  {
    time: "03:00 PM",
    title: "Ceremony",
    description:
      "The moment we've been waiting for — surrounded by the people we love.",
    icon: ChurchOutlinedIcon,
    accent: colors.powderBlue,
    highlight: colors.deepBlue,
  },

  {
    time: "04:30 PM",
    title: "Photos",
    description:
      "A little picture-taking, a lot of smiling, and memories to keep forever.",
    icon: CameraAltOutlinedIcon,
    accent: "#F9E8B9",
    highlight: colors.gold,
  },

  {
    time: "05:30 PM",
    title: "Reception Program & Dinner",
    description:
      "Good food, happy tears, stories, speeches, and a celebration of love.",
    icon: RestaurantOutlinedIcon,
    accent: "#F5D7DC",
    highlight: colors.pink,
  },

  {
    time: "08:00 PM",
    title: "Dancing",
    description:
      "Time to loosen up, hit the dance floor, and celebrate!",
    icon: MusicNoteRoundedIcon,
    accent: "#DED5EF",
    highlight: colors.lavender,
  },

  {
    time: "10:00 PM",
    title: "Send Off",
    description:
      "One last hug, one last photo, and off they go into their forever.",
    icon: CelebrationRoundedIcon,
    accent: "#D5E9DA",
    highlight: colors.green,
  },
];

export default function WeddingTimeline() {
  return (
    <section id="timeline">
      <Box
        className="timeline-page"
        sx={{
          position: "relative",
          overflow: "hidden",
          background: colors.cream,
          py: {
            xs: 10,
            sm: 14,
          },
        }}
      >
        {/* =====================================
            MOVING DECORATIONS
        ===================================== */}

        <FloatingHeart
          className="timeline-float timeline-float-1"
          sx={{
            top: "10%",
            left: "8%",
            color: colors.pink,
          }}
        />

        <FloatingSparkle
          className="timeline-float timeline-float-2"
          sx={{
            top: "23%",
            right: "9%",
            color: colors.gold,
          }}
        />

        <FloatingRibbon
          className="timeline-float timeline-float-3"
          sx={{
            top: "47%",
            left: "4%",
          }}
        />

        <FloatingHeart
          className="timeline-float timeline-float-4"
          sx={{
            bottom: "18%",
            right: "8%",
            color: colors.lavender,
          }}
        />

        <FloatingSparkle
          className="timeline-float timeline-float-5"
          sx={{
            bottom: "7%",
            left: "13%",
            color: colors.gold,
          }}
        />

        {/* =====================================
            HEADER
        ===================================== */}

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: {
                xs: 7,
                sm: 9,
              },
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
                  }}
                />

                <AutoAwesomeRoundedIcon
                  sx={{
                    width: 19,
                    height: 19,
                    color: colors.gold,
                  }}
                />

                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor:
                      colors.gold,
                  }}
                />
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.3em",
                color: colors.deepBlue,
                textTransform: "uppercase",
              }}
            >
              A little plan for the day
            </Typography>

            <Typography
              component="h2"
              sx={{
                mt: 2,
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontSize: {
                  xs: "4rem",
                  sm: "5.5rem",
                },
                fontWeight: 400,
                lineHeight: 0.82,
                color: colors.deepBlue,
                letterSpacing: "-0.02em",
              }}
            >
              Our
              <br />

              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                }}
              >
                wedding day
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                fontFamily:
                  "'Great Vibes', cursive",
                fontSize: {
                  xs: "1.3rem",
                  sm: "1.5rem",
                },
                color: colors.gold,
              }}
            >
              from “I do” to “let's dance!”
            </Typography>
          </Box>

          {/* =====================================
              TIMELINE
          ===================================== */}

          <Timeline
            position="alternate"
            sx={{
              p: 0,
              m: 0,

              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLast =
                index === events.length - 1;

              return (
                <TimelineItem
                  key={event.title}
                  className="wedding-timeline-item"
                >
                  {/* TIMELINE LINE */}

                  <TimelineSeparator>
                    <TimelineDot
                      className="timeline-dot"
                      sx={{
                        m: 0,

                        width: {
                          xs: 45,
                          sm: 52,
                        },

                        height: {
                          xs: 45,
                          sm: 52,
                        },

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        backgroundColor:
                          event.accent,

                        border:
                          `2px solid ${event.highlight}`,

                        boxShadow:
                          `4px 5px 0 ${event.highlight}`,

                        zIndex: 2,
                      }}
                    >
                      <Icon
                        sx={{
                          fontSize: {
                            xs: 20,
                            sm: 23,
                          },

                          color:
                            event.highlight,
                        }}
                      />
                    </TimelineDot>

                    {!isLast && (
                      <TimelineConnector
                        className="hand-drawn-line"
                        sx={{
                          width: "2px",

                          backgroundColor:
                            colors.gold,

                          opacity: 0.7,
                        }}
                      />
                    )}
                  </TimelineSeparator>

                  {/* CONTENT */}

                  <TimelineContent
                    sx={{
                      py: {
                        xs: 0,
                        sm: 1,
                      },

                      px: {
                        xs: 2,
                        sm: 3,
                      },

                      pb: {
                        xs: 6,
                        sm: 7,
                      },
                    }}
                  >
                    <TimelineEvent
                      event={event}
                      index={index}
                    />
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Container>
      </Box>
    </section>
  );
}


/* =========================================
   EVENT CARD
========================================= */

function TimelineEvent({ event, index }) {
  return (
    <Box
      className="timeline-event-card"
      sx={{
        position: "relative",

        maxWidth: {
          xs: "100%",
          sm: 510,
        },

        px: {
          xs: 2.5,
          sm: 3.5,
        },

        py: {
          xs: 2.5,
          sm: 3,
        },

        backgroundColor:
          "rgba(255,255,255,0.65)",

        border:
          `1px solid ${event.highlight}55`,

        borderRadius:
          index % 2 === 0
            ? "8px 20px 8px 20px"
            : "20px 8px 20px 8px",

        boxShadow:
          `5px 6px 0 ${event.accent}`,

        transform:
          index % 2 === 0
            ? "rotate(-0.6deg)"
            : "rotate(0.6deg)",

        transition:
          "transform 0.3s ease, box-shadow 0.3s ease",

        "&:hover": {
          transform:
            index % 2 === 0
              ? "rotate(0deg) translateY(-4px)"
              : "rotate(0deg) translateY(-4px)",

          boxShadow:
            `7px 9px 0 ${event.accent}`,
        },
      }}
    >
      {/* HIGHLIGHT TAPE */}

      <Box
        sx={{
          position: "absolute",

          top: -7,

          left: {
            xs: 25,
            sm: 35,
          },

          width: 60,
          height: 15,

          backgroundColor:
            event.highlight,

          opacity: 0.75,

          transform:
            index % 2 === 0
              ? "rotate(-4deg)"
              : "rotate(4deg)",
        }}
      />

      {/* TIME */}

      <Typography
        sx={{
          fontFamily:
            "'Great Vibes', cursive",

          fontSize: {
            xs: "1.3rem",
            sm: "1.5rem",
          },

          color: event.highlight,

          mb: 0.2,
        }}
      >
        {event.time}
      </Typography>

      {/* TITLE */}

      <Typography
        component="h3"
        sx={{
          fontFamily:
            "'Cormorant Garamond', serif",

          fontSize: {
            xs: "1.7rem",
            sm: "2rem",
          },

          lineHeight: 1,

          fontWeight: 500,

          color: colors.deepBlue,

          mb: 1,
        }}
      >
        {event.title}
      </Typography>

      {/* DESCRIPTION */}

      <Typography
        sx={{
          fontFamily:
            "'Cormorant Garamond', serif",

          fontSize: {
            xs: "0.92rem",
            sm: "1rem",
          },

          lineHeight: 1.6,

          color: colors.text,

          maxWidth: 420,
        }}
      >
        {event.description}
      </Typography>

      {/* LITTLE DRAWN STAR */}

      <AutoAwesomeRoundedIcon
        sx={{
          position: "absolute",

          right: 15,
          bottom: 13,

          fontSize: 14,

          color:
            event.highlight,

          opacity: 0.45,
        }}
      />
    </Box>
  );
}


/* =========================================
   FLOATING HEART
========================================= */

function FloatingHeart({ className, sx }) {
  return (
    <FavoriteRoundedIcon
      className={className}
      sx={{
        position: "absolute",

        fontSize: {
          xs: 15,
          sm: 20,
        },

        opacity: 0.45,

        pointerEvents: "none",

        ...sx,
      }}
    />
  );
}


/* =========================================
   FLOATING SPARKLE
========================================= */

function FloatingSparkle({ className, sx }) {
  return (
    <AutoAwesomeRoundedIcon
      className={className}
      sx={{
        position: "absolute",

        fontSize: {
          xs: 16,
          sm: 22,
        },

        opacity: 0.5,

        pointerEvents: "none",

        ...sx,
      }}
    />
  );
}


/* =========================================
   FLOATING RIBBON
========================================= */

function FloatingRibbon({ className, sx }) {
  return (
    <Box
      className={className}
      sx={{
        position: "absolute",

        width: 60,
        height: 35,

        opacity: 0.4,

        pointerEvents: "none",

        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",

          width: 42,
          height: 16,

          border:
            `1.5px solid ${colors.pink}`,

          borderRadius:
            "50% 10px 50% 10px",

          transform: "rotate(25deg)",
        }}
      />

      <Box
        sx={{
          position: "absolute",

          left: 18,
          top: 14,

          width: 42,
          height: 16,

          border:
            `1.5px solid ${colors.pink}`,

          borderRadius:
            "10px 50% 10px 50%",

          transform: "rotate(-25deg)",
        }}
      />
    </Box>
  );
}