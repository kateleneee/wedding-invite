import React from "react";
import "./WeddingTimelineElegant.css";

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

export default function WeddingTimelineElegant() {
  return (
    <section className="wte-section">
      <div className="wte-card">

        {/* Decorative frame */}
        <div className="wte-frame" />

        <span className="wte-corner wte-corner-tl" />
        <span className="wte-corner wte-corner-tr" />
        <span className="wte-corner wte-corner-bl" />
        <span className="wte-corner wte-corner-br" />

        <div className="wte-content">

          {/* Header */}
          <header className="wte-header">
            <span className="wte-eyebrow">
              THE CELEBRATION
            </span>

            <div className="wte-header-rule">
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
          <div className="wte-timeline">

            <div className="wte-spine">
              <span className="wte-spine-progress" />
            </div>

            {timeline.map((event, index) => (
              <article
                className={`wte-event ${index % 2 === 0
                    ? "wte-event-left"
                    : "wte-event-right"
                  }`}
                key={event.time}
              >

                {/* Event content */}
                <div className="wte-event-content">

                  <span className="wte-time">
                    {event.time}
                  </span>

                  <h3>{event.title}</h3>

                  <div className="wte-event-rule" />

                  <p>{event.description}</p>

                </div>


                {/* Timeline marker */}
                <div className="wte-marker">
                  <span />
                </div>

              </article>
            ))}

          </div>


          {/* Footer */}
          <footer className="wte-footer">
            <span />
            <b>D&K</b>
            <span />
          </footer>

        </div>
      </div>
    </section>
  );
}