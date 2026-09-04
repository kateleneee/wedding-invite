import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
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
};

const WEDDING_DATE = new Date("2026-12-02T09:00:00");

const calculateTimeLeft = () => {
  const difference = WEDDING_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownUnit = ({ value, label }) => (
  <Box
    sx={{
      minWidth: { xs: 55, sm: 75 },
      textAlign: "center",
    }}
  >
    <Typography
      sx={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: { xs: "2rem", sm: "2.8rem" },
        lineHeight: 1,
        color: "#5E7690",
        fontWeight: 500,
      }}
    >
      {String(value).padStart(2, "0")}
    </Typography>

    <Typography
      sx={{
        mt: 0.75,
        fontSize: "0.6rem",
        letterSpacing: "0.18em",
        color: "#9A9A8A",
        textTransform: "uppercase",
      }}
    >
      {label}
    </Typography>
  </Box>
);

export default function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="wedding"
    >
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(145deg, #EAF3F8 0%, #F8F8F1 55%, #FFF8D9 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: 6,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative ribbon */}
        {/* <Box
          sx={{
            position: "absolute",
            top: { xs: 20, sm: 40 },
            left: { xs: 15, sm: 50 },
            fontSize: "2rem",
            transform: "rotate(-15deg)",
            opacity: 0.8,
          }}
        >
          🎀
        </Box> */}

        {/* Decorative church */}
        {/* <Box
          sx={{
            position: "absolute",
            right: { xs: 15, sm: 50 },
            top: { xs: 35, sm: 70 },
            fontSize: "1.8rem",
            opacity: 0.7,
          }}
        >
          ⛪
        </Box> */}

        {/* Decorative flowers */}
        {/* <Typography
          sx={{
            position: "absolute",
            bottom: 30,
            left: 25,
            fontSize: "1.8rem",
            opacity: 0.5,
          }}
        >
          ✿
        </Typography>

        <Typography
          sx={{
            position: "absolute",
            bottom: 60,
            right: 30,
            fontSize: "1.4rem",
            opacity: 0.5,
          }}
        >
          ♡
        </Typography> */}

        <Container maxWidth="sm">
          {/* <Paper
            elevation={0}
            sx={{
              position: "relative",
              backgroundColor: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(94,118,144,0.15)",
              borderRadius: "24px",
              px: { xs: 3, sm: 6 },
              py: { xs: 5, sm: 7 },
              textAlign: "center",
              backdropFilter: "blur(8px)",
            }}
          > */}
          {/* Header */}

          <div className="save-date-header">

            <div className="save-date-icons">

              <AutoAwesomeRoundedIcon />

              <ChurchOutlinedIcon />

              <FavoriteBorderRoundedIcon />

            </div>

            <span className="save-date-eyebrow">
              THE COUNTDOWN BEGINS
            </span>

            <h3>
              Until
              <br />
              forever
            </h3>

            <p>
              Counting down the days until
              we say “I do.”
            </p>

          </div>

          {/* Countdown */}
          <Box
            sx={{
              backgroundColor: "#F8F5DF",
              borderRadius: "18px",
              py: 2.5,
              px: 1,
              mb: 4,
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: 1, sm: 2 }}
            >
              <CountdownUnit
                value={timeLeft.days}
                label="Days"
              />

              <Typography sx={{ color: "#CDBB65" }}>:</Typography>

              <CountdownUnit
                value={timeLeft.hours}
                label="Hours"
              />

              <Typography sx={{ color: "#CDBB65" }}>:</Typography>

              <CountdownUnit
                value={timeLeft.minutes}
                label="Minutes"
              />

              <Typography sx={{ color: "#CDBB65" }}>:</Typography>

              <CountdownUnit
                value={timeLeft.seconds}
                label="Seconds"
              />
            </Stack>
          </Box>

          {/* Bottom ornament */}
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#D1B94F",
              letterSpacing: "0.5em",
              ml: "0.5em",
            }}
          >
            ✿  ♡  ✿
          </Typography>
          {/* </Paper> */}
        </Container>
      </Box>
    </section>
  );
}