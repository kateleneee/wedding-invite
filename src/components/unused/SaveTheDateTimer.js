import { useEffect, useState } from "react";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import "./SaveTheDate.css";

const WEDDING_DATE = new Date(
  "2027-02-20T15:00:00+08:00"
);

function getTimeRemaining() {
  const difference =
    WEDDING_DATE.getTime() - Date.now();

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
}

export default function SaveTheDateTimer() {

  const [timeLeft, setTimeLeft] =
    useState(getTimeRemaining());

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="save-date">

      {/* Decorative ribbon */}

      <div className="save-date-ribbon ribbon-left">
        <span />
        <span />
      </div>

      <div className="save-date-ribbon ribbon-right">
        <span />
        <span />
      </div>

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

        <h2>
          Until
          <br />
          forever
        </h2>

        <p>
          Counting down the days until
          we say “I do.”
        </p>

      </div>

      {/* Countdown */}

      <div className="countdown">

        <CountdownItem
          value={timeLeft.days}
          label="days"
        />

        <div className="countdown-divider">
          :
        </div>

        <CountdownItem
          value={timeLeft.hours}
          label="hours"
        />

        <div className="countdown-divider">
          :
        </div>

        <CountdownItem
          value={timeLeft.minutes}
          label="minutes"
        />

        <div className="countdown-divider">
          :
        </div>

        <CountdownItem
          value={timeLeft.seconds}
          label="seconds"
        />

      </div>

      {/* Date */}

      <div className="wedding-date">

        <span>
          SATURDAY
        </span>

        <strong>
          20
        </strong>

        <span>
          FEBRUARY 2027
        </span>

      </div>

      {/* Bottom decoration */}

      <div className="save-date-flourish">

        <span />

        <FavoriteBorderRoundedIcon />

        <span />

      </div>

    </section>
  );
}


/* ---------------------------------------
   COUNTDOWN ITEM
--------------------------------------- */

function CountdownItem({
  value,
  label,
}) {

  return (
    <div className="countdown-item">

      <div className="countdown-number">
        {String(value).padStart(2, "0")}
      </div>

      <div className="countdown-label">
        {label}
      </div>

    </div>
  );
}