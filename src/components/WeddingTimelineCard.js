import React from "react";
import "./WeddingTimelineCard.css";

const timelineItems = [
  {
    time: "9:00 AM",
    title: "The Ceremony",
    description: "The moment we say our vows and begin this new chapter.",
  },
  {
    time: "10:30 AM",
    title: "Photos & Greetings",
    description: "Hugs, happy tears, and photographs with our favorite people.",
  },
  {
    time: "12:00 PM",
    title: "Reception",
    description: "Lunch, laughter, and a celebration surrounded by loved ones.",
  },
  {
    time: "1:30 PM",
    title: "Program & Dinner",
    description: "Heartfelt messages, stories, surprises, and good food.",
  },
  {
    time: "3:00 PM",
    title: "Dancing & Celebration",
    description: "Music, dancing, and plenty of reasons to celebrate.",
  },
  {
    time: "4:30 PM",
    title: "Send Off",
    description: "One last photo before we begin our next chapter together.",
  },
];

const WeddingTimelineCard = () => {
  return (
    <section className="wtc-section">

      <div className="wtc-card">

        {/* ==================================
            VINTAGE ORNAMENT
        ================================== */}

        <div className="wtc-top-ornament">
          <span></span>
          <i></i>
          <span></span>
        </div>


        {/* ==================================
            HEADER
        ================================== */}

        <div className="wtc-header">

          <div className="wtc-monogram">
            D<span>&</span>K
          </div>

          <p className="wtc-label">
            THE WEDDING DAY
          </p>

          <h2>
            Wedding Timeline
          </h2>

          <p className="wtc-intro">
            A beautiful day, thoughtfully planned
            from beginning to end.
          </p>

        </div>


        {/* ==================================
            WAVY DIVIDER
        ================================== */}

        <div className="wtc-wave-divider">
          <svg
            viewBox="0 0 700 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="
              M0 20
              C35 5, 65 35, 100 20
              S165 5, 200 20
              S265 35, 300 20
              S365 5, 400 20
              S465 35, 500 20
              S565 5, 600 20
              S665 35, 700 20
            " />
          </svg>
        </div>


        {/* ==================================
            TIMELINE
        ================================== */}

        <div className="wtc-timeline">

          <div className="wtc-main-line"></div>

          {timelineItems.map((item, index) => (
            <div
              className={`wtc-event ${index % 2 === 0 ? "wtc-event-left" : "wtc-event-right"
                }`}
              style={{
                "--event-delay": `${index * 0.12}s`,
              }}
              key={item.title}
            >

              <div className="wtc-event-time">
                {item.time}
              </div>

              <div className="wtc-event-marker">
                <span></span>
              </div>

              <div className="wtc-event-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>


        {/* ==================================
            BOTTOM ORNAMENT
        ================================== */}

        <div className="wtc-bottom-ornament">

          <div className="wtc-small-wave">
            <svg
              viewBox="0 0 260 30"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="
                M0 15
                C20 3, 35 27, 55 15
                S90 3, 110 15
                S145 27, 165 15
                S200 3, 220 15
                S245 27, 260 15
              " />
            </svg>
          </div>

          <div className="wtc-footer-text">
            <strong>D & K</strong>
            <span>02 · 12 · 2026</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WeddingTimelineCard;