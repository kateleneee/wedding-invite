import photo2 from "../assets/images/photo2.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";

import CountdownComponent from "./CountdownComponent";
import "./SaveTheDate.css";

const dateItems = [
  {
    id: "month",
    image: photo2,
    number: "12",
    label: "MONTH",
    alt: "Wedding month",
  },
  {
    id: "day",
    image: photo5,
    number: "02",
    label: "DAY",
    alt: "Wedding day",
  },
  {
    id: "year",
    image: photo6,
    number: "26",
    label: "YEAR",
    alt: "Wedding year",
  },
];

function Invitation() {
  return (
    <div className="invitation">
      <p className="invitation-title">You are invited!</p>

      <p className="invitation-message">
        <span>
          Together with our families, we joyfully invite you to join us,
        </span>
        <span>
          as we celebrate our love, our marriage, and our future together.
        </span>
      </p>
    </div>
  );
}

function DateCard({ image, number, label, alt }) {
  return (
    <div className="date-card">
      <img src={image} alt={alt} />

      <div className="date-number">{number}</div>

      <span className="date-label">{label}</span>
    </div>
  );
}

export default function SaveTheDate() {
  return (
    <section className="wedding-date">
      <Invitation />

      <div className="date-images">
        {dateItems.map((item) => (
          <DateCard
            key={item.id}
            image={item.image}
            number={item.number}
            label={item.label}
            alt={item.alt}
          />
        ))}
      </div>

      <div className="countdown-wrapper">
        <CountdownComponent />
      </div>
    </section>
  );
}
