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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.1341324018563!2d121.02947357487373!3d14.64832638584369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6fe3fb7451f%3A0xa2ac64e13b5d0e32!2sSta.%20Rita%20de%20Cascia%20Parish%20(Diocese%20of%20Cubao)!5e0!3m2!1sen!2sph!4v1788513453763!5m2!1sen!2sph",
    // "https://share.google/kLGZ9267qicTtrMxk",

    // "https://www.google.com/maps?q=Our+Lady+of+the+Holy+Rosary+Parish&output=embed",
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
          {/* <p className="venue-label">WHERE WE'LL BE</p> */}

          <h3>{venue.title}</h3>

          <div className="gold-divider">
            <span>✦</span>
          </div>

          <p className="venue-time">{venue.time}</p>

          <p className="venue-address-text">{venue.address}</p>

          {/* <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              venue.title
            )}`}
            target="_blank"
            rel="noreferrer"
            className="maps-button"
          >
            <span className="map-pin">⌖</span>
            View on Google Maps
          </a> */}
        </div>
      </div>


    </article>
  );
}

export default function Venues() {
  return (
    <section className="venues-section" id="venues">
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
      {/* <div className="map-section">
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
      </div> */}
      <section className="map-section">
        <div className="venues-header">
          <span className="eyebrow">FIND YOUR WAY</span>
          <p className="venues-intro">We'll see you there.</p>
        </div>

        <div className="map-card">
          <div className="map-frame">
            {/* <iframe
              title={`${venues[0].type} location`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              /> */}
            <iframe
              title="map-location"
              src={venues[0].mapUrl}
              width="600" height="450"
              allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>

          <div className="map-decoration map-decoration-one" />
          <div className="map-decoration map-decoration-two" />
        </div>
      </section>
      {/* } */}
    </section>
  );
}