import React from "react";
import "./WeddingTimelineCard2.css";

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

export default function WeddingTimelineCard2() {
  return (
    <section className="timeline-card-section">
      <div className="timeline-card-elegant">

        {/* Outer decorative lines */}
        <div className="card-line card-line-top" />
        <div className="card-line card-line-bottom" />
        <div className="card-line card-line-left" />
        <div className="card-line card-line-right" />

        {/* Corner details */}
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="timeline-inner">

          {/* Header */}
          <header className="timeline-elegant-header">
            <span className="timeline-kicker">THE CELEBRATION</span>

            <div className="header-rule">
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

          {/* Timeline */}
          <div className="elegant-timeline">
            <div className="timeline-spine" />

            {timeline.map((event, index) => (
              <div
                className={`elegant-event ${index % 2 === 0 ? "event-left" : "event-right"
                  }`}
                key={event.time}
              >
                <div className="event-content">
                  <span className="event-time">{event.time}</span>

                  <h3>{event.title}</h3>

                  <div className="event-rule" />

                  <p>{event.description}</p>
                </div>

                <div className="event-marker">
                  <span />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="timeline-footer">
            <div className="footer-line" />

            <span className="monogram">D&K</span>

            <div className="footer-line" />
          </footer>

        </div>
      </div>
    </section>
  );
}