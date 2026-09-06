import React from "react";
import "./WeddingTimelineV2.css";

const timelineItems = [
  {
    time: "9:00 AM",
    title: "The Ceremony",
    description:
      "We say our vows, surrounded by the people who mean the most to us.",
    icon: "♡",
    accent: "yellow",
  },
  {
    time: "10:30 AM",
    title: "Photos & Greetings",
    description:
      "A little time for photographs, hugs, happy tears, and memories.",
    icon: "✿",
    accent: "blue",
  },
  {
    time: "12:00 PM",
    title: "Reception",
    description:
      "Join us for lunch, stories, laughter, and a celebration of love.",
    icon: "❀",
    accent: "yellow",
  },
  {
    time: "1:30 PM",
    title: "Program & Dinner",
    description:
      "Good food, heartfelt messages, and a few surprises along the way.",
    icon: "✦",
    accent: "blue",
  },
  {
    time: "3:00 PM",
    title: "Dancing & Celebration",
    description:
      "Let's celebrate properly — music, dancing, and plenty of fun.",
    icon: "♡",
    accent: "yellow",
  },
  {
    time: "4:30 PM",
    title: "Send Off",
    description:
      "One last photo, one last hug, and the beginning of our next chapter.",
    icon: "✧",
    accent: "blue",
  },
];

const WeddingTimeline = () => {
  return (
    <section className="wedding-timeline">

      {/* Background decorative elements */}
      <div className="timeline-bg-flower timeline-bg-flower-one">
        ✿
      </div>

      <div className="timeline-bg-flower timeline-bg-flower-two">
        ❀
      </div>

      <div className="timeline-bg-flower timeline-bg-flower-three">
        ❁
      </div>

      {/* Header */}
      <div className="timeline-header">

        <div className="timeline-monogram">
          <span>D</span>
          <small>&</small>
          <span>K</span>
        </div>

        <p className="timeline-eyebrow">
          THE WEDDING DAY
        </p>

        <h2 className="timeline-title">
          Our Day,
          <br />
          <em>Beautifully Unfolding</em>
        </h2>

        <p className="timeline-intro">
          From the first hello to the final send-off,
          here’s how we’ll celebrate together.
        </p>

      </div>


      {/* Timeline */}
      <div className="timeline">

        <div className="timeline-line"></div>

        {timelineItems.map((item, index) => (
          <div
            className={`timeline-item timeline-item-${index % 2 === 0 ? "left" : "right"}`}
            key={item.title}
          >

            {/* Timeline marker */}
            <div className={`timeline-marker ${item.accent}`}>
              <span>{item.icon}</span>
            </div>


            {/* Content */}
            <div className="timeline-card">

              <div className="timeline-card-top">
                <span className="timeline-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="timeline-time">
                  {item.time}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </div>
        ))}

      </div>


      {/* Footer monogram */}
      <div className="timeline-footer">

        <div className="footer-line"></div>

        <div className="footer-monogram">
          D<span>&</span>K
        </div>

        <p>
          And so, our next chapter begins.
        </p>

      </div>

    </section>
  );
};

export default WeddingTimeline;