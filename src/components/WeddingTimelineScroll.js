import React, { useEffect, useRef } from "react";
import "./WeddingTimelineScroll.css";

const timeline = [
  {
    time: "9:00 AM",
    title: "The Ceremony",
    description:
      "The moment we say our vows and begin this new chapter.",
  },
  {
    time: "10:30 AM",
    title: "Photos & Greetings",
    description:
      "Hugs, happy tears, and photographs with our favorite people.",
  },
  {
    time: "12:00 PM",
    title: "Reception",
    description:
      "Lunch, laughter, and a celebration surrounded by loved ones.",
  },
  {
    time: "1:30 PM",
    title: "Program & Dinner",
    description:
      "Heartfelt messages, stories, surprises, and good food.",
  },
  {
    time: "3:00 PM",
    title: "Dancing & Celebration",
    description:
      "Music, dancing, and plenty of reasons to celebrate.",
  },
  {
    time: "4:30 PM",
    title: "Send Off",
    description:
      "One last photo before we begin our next chapter together.",
  },
];

export default function WeddingTimelineScroll2() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;

    if (!timeline) return;

    const events = timeline.querySelectorAll(".wts2-event");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wts2-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    events.forEach((event) => observer.observe(event));

    return () => {
      events.forEach((event) => observer.unobserve(event));
    };
  }, []);

  return (
    <section className="wts2-section">
      <div className="wts2-card">

        {/* Decorative frame */}
        <div className="wts2-frame" />

        {/* Corner details */}
        <span className="wts2-corner wts2-corner-tl" />
        <span className="wts2-corner wts2-corner-tr" />
        <span className="wts2-corner wts2-corner-bl" />
        <span className="wts2-corner wts2-corner-br" />

        <div className="wts2-content">

          {/* ================= HEADER ================= */}

          <header className="wts2-header">
            <span className="wts2-eyebrow">
              THE CELEBRATION
            </span>

            <div className="wts2-header-rule">
              <span />
              <i />
              <span />
            </div>

            <h2>Wedding Timeline</h2>

            <p>
              A beautiful day, thoughtfully celebrated
              <br />
              from beginning to end.
            </p>
          </header>


          {/* ================= TIMELINE ================= */}

          <div
            className="wts2-timeline"
            ref={timelineRef}
          >

            {/* Central timeline */}
            <div className="wts2-spine" />

            {timeline.map((event, index) => (
              <article
                key={event.time}
                className={`wts2-event ${index % 2 === 0
                  ? "wts2-event-left"
                  : "wts2-event-right"
                  }`}
              >

                {/* Event text */}
                <div className="wts2-event-content">

                  <span className="wts2-time">
                    {event.time}
                  </span>

                  <h3>{event.title}</h3>

                  <div className="wts2-event-rule" />

                  <p>{event.description}</p>

                </div>


                {/* Square marker */}
                <div className="wts2-marker">
                  <span />
                </div>

              </article>
            ))}

          </div>


          {/* ================= FOOTER ================= */}

          <footer className="wts2-footer">
            <span />
            <b>D&K</b>
            <span />
          </footer>

        </div>
      </div>
    </section>
  );
}