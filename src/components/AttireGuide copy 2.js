import React from "react";
import "./AttireGuide.css";

import ninongImage from "../assets/images/attires/ninong.png";
import ninangImage from "../assets/images/attires/ninang.png";
import guestImage1 from "../assets/images/attires/guest_ladies.png";
import guestImage2 from "../assets/images/attires/guest_gentlemen.png";


/* =========================================================
   PALETTE COMPONENT
========================================================= */

const ColorPalette = ({ colors }) => {
  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div className="palette-item" key={index}>
          <div
            className="palette-arch"
            style={{ backgroundColor: color.value }}
          />

          <span className="palette-name">
            {color.name}
          </span>
        </div>
      ))}
    </div>
  );
};


/* =========================================================
   ATTIRE GUIDE
========================================================= */

const AttireGuide = () => {
  return (
    <main className="attire-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="attire-header">
        <p className="attire-eyebrow">
          WEDDING ATTIRE
        </p>

        <h1 className="attire-title">
          Dress Code
        </h1>

        <span className="attire-divider" />

        <p className="attire-intro">
          We'd love for you to celebrate with us in colors
          that complement our special day.
        </p>
      </header>

      <ColorPalette
        colors={[
          {
            name: "Powder Blue",
            value: "#DCEBF0",
          },
          {
            name: "Dusty Blue",
            value: "#9BB7C5",
          },
          {
            name: "Champagne",
            value: "#E8D9B5",
          },
          {
            name: "Soft Yellow",
            value: "#FFF1B8",
          },
        ]}
      />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="attire-content">

        {/* ===================================================
            NINONG & NINANG
        =================================================== */}

        <section className="attire-section">

          <div className="section-heading">
            <p className="section-eyebrow">
              Principal Sponsors
            </p>

            <h2>
              {/* Ninong &amp; Ninang */}
              Principal Sponsors

            </h2>

            <p className="section-description">
              Our beloved sponsors are encouraged to wear
              elegant formal attire in the colors below.
            </p>

          </div>


          <div className="sponsors-grid">

            {/* NINONG */}

            <article className="sponsor-card">

              <div className="attire-image">
                <img
                  src={ninongImage}
                  alt="Ninong attire"
                />
              </div>
              {/* 
              <h3>
                Ninong
              </h3> */}

              <p className="card-description">
                Formal attire in classic, understated
                tones that complement the wedding palette.
              </p>

              <ColorPalette
                colors={[
                  {
                    name: "",
                    value: "#faf0e6",
                  },
                  {
                    // name: "Slate Blue",
                    value: "#fce8d9",
                  },
                  {
                    // name: "Slate Blue",
                    value: "#2b2b2a",
                  },
                ]}
              />

            </article>


            {/* NINANG */}

            <article className="sponsor-card">

              <div className="attire-image">
                <img
                  src={ninangImage}
                  alt="Ninang attire"
                />
              </div>

              {/* <h3>
                Ninang
              </h3> */}

              <p className="card-description">
                Elegant formal dresses in soft,
                sophisticated shades from our palette.
              </p>

              <ColorPalette
                colors={[
                  {
                    name: "Powder Blue",
                    value: "#DCEBF0",
                  },
                  {
                    name: "Dusty Blue",
                    value: "#9BB7C5",
                  },
                ]}
              />

            </article>

          </div>

        </section>


        {/* ===================================================
            GUESTS
        =================================================== */}

        <section className="attire-section">

          <div className="section-heading">
            <p className="section-eyebrow">
              For Our Guests
            </p>

            <h2>
              Guests
            </h2>

            <p className="section-description">
              Come dressed in your favorite shade from
              our carefully chosen wedding palette.
            </p>
          </div>

          {/* <ColorPalette
            colors={[
              {
                name: "Sage Green",
                value: "#B8D8BA",
              },
              {
                name: "Peach",
                value: "#F6C6A8",
              },
              {
                name: "Lavender",
                value: "#C9B6D9",
              },
              {
                name: "Dusty Pink",
                value: "#E8B8C8",
              },
            ]}
          /> */}
          <ColorPalette
            colors={[
              {
                // name: "Sage Green",
                value: "#C5D8C0",
              },
              {
                // name: "Peach",
                value: "#F4C7B5",
              },
              {
                // name: "Lavender",
                value: "#D5C6E0",
              },
              {
                // name: "Dusty Pink",
                value: "#E3C1C8",
              },
            ]}
          />


          <div className="guest-images">

            <div className="guest-image">
              <img
                src={guestImage1}
                alt="Guest attire for ladies"
              />
            </div>

            <div className="guest-image">
              <img
                src={guestImage2}
                alt="Guest attire for gentlemen"
              />
            </div>

          </div>

        </section>

      </div>

    </main>
  );
};

export default AttireGuide;
