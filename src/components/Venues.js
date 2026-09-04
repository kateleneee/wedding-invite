import React from "react";
import "./Venues.css";
import church from "../assets/images/church1.jpg";
import reception from "../assets/images/reception.png";

const venues = [
  {
    type: "Ceremony",
    title: "Sta. Rita de Cascia Parish (Diocese of Cubao)",
    time: "2:00 PM",
    address: "Sta. Rita De Cascia Church, South Lawin cor. Baguio Road, Philam Homes Quezon City, Metro Manila",

    image: church,
    mapUrl:
      "https://www.google.com/maps?q=Our+Lady+of+the+Holy+Rosary+Parish&output=embed",
  },
  {
    type: "Reception",
    title: "Sta. Rita de Cascia Parish Building",
    time: "7:00 PM",
    image: reception,
    // mapUrl:
    //   "https://www.google.com/maps?q=The+Garden+Ballroom+Manila&output=embed",
  },
];


function VenueCard({ venue, index }) {
  return (
    <article className={`venue-card venue-card-${index}`}>
      <div className="venue-heading">
        <span className="venue-number">0{index + 1}</span>

        <div>
          <p className="venue-type">{venue.type}</p>
          <div className="venue-heading-line" />
        </div>
      </div>

      <div className="venue-content">
        {/* PHOTO */}
        <div className="venue-photo-wrapper">
          <div className="photo-frame photo-frame-one" />
          <div className="photo-frame photo-frame-two" />
          <div className="photo-frame photo-frame-three" />

          <div className="venue-photo">
            <img src={venue.image} alt={venue.title} />

            <div className="photo-corner photo-corner-top" />
            <div className="photo-corner photo-corner-bottom" />
          </div>

          <div className="blue-dot blue-dot-one" />
          <div className="blue-dot blue-dot-two" />
        </div>

        {/* DETAILS */}
        <div className="venue-details">
          <p className="venue-label">WHERE WE'LL BE</p>

          <h3>{venue.title}</h3>

          <div className="gold-divider">
            <span>✦</span>
          </div>

          <p className="venue-time">{venue.time}</p>

          <p className="venue-address">{venue.address}</p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              venue.title
            )}`}
            target="_blank"
            rel="noreferrer"
            className="maps-button"
          >
            <span className="map-pin">⌖</span>
            View on Google Maps
          </a>
        </div>
      </div>


    </article>
  );
}

export default function Venues() {
  return (
    <section className="venues-section">
      <div className="venues-header">
        <p className="eyebrow">THE DAY OF</p>

        <h3>
          Ceremony <span>&amp;</span> Reception
        </h3>

        <p className="venues-intro">
          Two places, one beautiful day.
          <br />
          We can't wait to celebrate with you.
        </p>

        <div className="header-ornament">
          <span />
          <b>✦</b>
          <span />
        </div>
      </div>

      <div className="venues-container">
        {venues.map((venue, index) => (
          <VenueCard
            key={venue.type}
            venue={venue}
            index={index}
          />
        ))}
      </div>
      {/* MAP */}
      {/* {venues[0].mapUrl && */}
      <div className="map-section">
        <div className="map-label">
          <span className="map-label-line" />
          <span>FIND US HERE</span>
          <span className="map-label-line" />
        </div>

        <div className="map-wrapper">
          <iframe
            title={`${venues[0].type} location`}
            src={venues[0].mapUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* } */}
    </section>
  );
}