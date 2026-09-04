import React from "react";
import "./Venues2.css";
import church from "../assets/images/church1.jpg";
import receptionImg from "../assets/images/reception.png";

const Venues = () => {
  const ceremony = {
    label: "THE CEREMONY",
    name: "Holy Family Parish",
    time: "December 2, 2026 · 9:00 AM",
    address: "Your venue address goes here",
    // image: "/images/ceremony.jpg",
    image: church,

  };

  const reception = {
    label: "THE RECEPTION",
    name: "The Reception Hall",
    time: "December 2, 2026 · 12:00 PM",
    address: "Your venue address goes here",
    image: receptionImg,
  };

  const googleMapsEmbed =
    "YOUR_GOOGLE_MAP_EMBED_URL";

  const googleMapsLink =
    "YOUR_GOOGLE_MAPS_LINK";

  return (
    <section className="venues-section">
      <div className="venues-content">

        {/* =========================
            HEADER
        ========================= */}
        <header className="venues-header">
          <span className="venues-eyebrow">
            THE CELEBRATION
          </span>

          <h2>Our Venues</h2>

          <p>
            One beautiful place, two special moments.
          </p>
        </header>


        {/* =========================
            VENUE CARDS
        ========================= */}
        <div className="venues-grid">

          {/* CEREMONY */}
          <article className="venue-card ceremony-card">

            <div className="venue-number">
              01
            </div>

            <div className="venue-image-wrapper">

              {/* Hand-drawn frames */}
              <span className="photo-frame frame-one"></span>
              <span className="photo-frame frame-two"></span>
              <span className="photo-frame frame-three"></span>

              <img
                src={ceremony.image}
                alt={`${ceremony.name} ceremony venue`}
                className="venue-image"
              />

              {/* Decorative dots */}
              <span className="blue-dot blue-dot-one"></span>
              <span className="blue-dot blue-dot-two"></span>

            </div>


            <div className="venue-info">

              <span className="venue-label">
                {ceremony.label}
              </span>

              <h3>
                {ceremony.name}
              </h3>

              <p className="venue-time">
                {ceremony.time}
              </p>

              <p className="venue-address">
                {ceremony.address}
              </p>

            </div>

          </article>


          {/* RECEPTION */}
          <article className="venue-card reception-card">

            <div className="venue-number">
              02
            </div>

            <div className="venue-image-wrapper">

              {/* Hand-drawn frames */}
              <span className="photo-frame frame-one"></span>
              <span className="photo-frame frame-two"></span>
              <span className="photo-frame frame-three"></span>

              <img
                src={reception.image}
                alt={`${reception.name} reception venue`}
                className="venue-image"
              />

              {/* Decorative dots */}
              <span className="blue-dot blue-dot-one"></span>
              <span className="blue-dot blue-dot-two"></span>

            </div>


            <div className="venue-info">

              <span className="venue-label">
                {reception.label}
              </span>

              <h3>
                {reception.name}
              </h3>

              <p className="venue-time">
                {reception.time}
              </p>

              <p className="venue-address">
                {reception.address}
              </p>

            </div>

          </article>

        </div>


        {/* =========================
            SHARED LOCATION / MAP
        ========================= */}
        <section className="shared-map-section">

          <div className="map-heading">

            <span>
              ONE LOCATION
            </span>

            <h3>
              Find Us Here
            </h3>

            <p>
              Both celebrations will be held at the same
              beautiful location.
            </p>

          </div>


          {/* MAP */}
          <div className="shared-map-wrapper">

            {/* Decorative map frames */}
            <span className="map-frame"></span>

            <span className="map-corner map-corner-top"></span>

            <span className="map-corner map-corner-bottom"></span>

            {/* Decorative dots */}
            <span className="blue-dot map-dot-one"></span>

            <span className="blue-dot map-dot-two"></span>


            <iframe
              title="Wedding venue location"
              src={googleMapsEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>


          {/* ADDRESS */}
          <div className="map-address">

            <span className="map-pin">
              ♡
            </span>

            <p>
              {ceremony.address}
            </p>

          </div>


          {/* DIRECTIONS */}
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-button"
          >
            Get Directions
            <span>↗</span>
          </a>

        </section>

      </div>
    </section>
  );
};

export default Venues;