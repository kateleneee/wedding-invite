import { useEffect, useState } from "react";
import "./CountdownComponent.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const WEDDING_DATE = new Date("2026-12-02T09:00:00");

const EMPTY_TIME = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculateTimeLeft() {
  const difference = WEDDING_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return EMPTY_TIME;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),

    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

    minutes: Math.floor((difference / (1000 * 60)) % 60),

    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="countdown-unit">
      <span className="countdown-value">{String(value).padStart(2, "0")}</span>

      <span className="countdown-label">{label}</span>
    </div>
  );
}

export default function CountdownComponent() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="wedding-countdown"
      aria-label="Countdown to December 2, 2026"
    >
      <div className="countdown-heading">
        <span className="countdown-heading-line" aria-hidden="true" />
        <p className="countdown-heading-text">Counting Down to Forever</p>
        <span className="countdown-heading-line" aria-hidden="true" />
      </div>

      <div className="countdown-units">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      <div className="countdown-heading">
        <span className="countdown-heading-line" aria-hidden="true" />
        <FavoriteBorderRoundedIcon
          className="heart-icon"
          style={{ height: "17px" }}
        />
        <span className="countdown-heading-line" aria-hidden="true" />
      </div>
      {/* <p className="countdown-wedding-date">December 2, 2026</p> */}
    </div>
  );
}
