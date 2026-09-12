import React from "react";
import "./AttireGuide.css";

// Replace these with your actual images
// import bridesmaidsImage from "../assets/images/bridesmaids.jpg";
// import groomsmenImage from "../assets/images/groomsmen.jpg";
import ninongImage from "../assets/images/attires/ninong.png";
import ninangImage from "../assets/images/attires/ninang.png";
import guestLadies from "../assets/images/attires/guest_ladies.png";
// import guestsGentlemen from "../assets/images/attires/guest_gentlemen.png";

const attireSections = [
  // {
  //   title: "Bridesmaids",
  //   subtitle: "& Maid of Honor",
  //   description:
  //     "Soft, romantic tones chosen to complement the bride while keeping the overall celebration light, elegant, and timeless.",
  //   image: bridesmaidsImage,
  //   colors: [
  //     "#D8C7C4",
  //     "#B9C7C9",
  //   ],
  //   paletteNames: ["Dusty Rose", "Powder Blue"],
  // },
  // {
  //   title: "Groomsmen",
  //   subtitle: "",
  //   description:
  //     "Classic and refined shades that complement the groom and create a cohesive look with the bridal party.",
  //   image: groomsmenImage,
  //   colors: [
  //     "#5E7180",
  //     "#C8BFA9",
  //   ],
  //   paletteNames: ["Slate Blue", "Warm Taupe"],
  // },
  {
    title: "Ninong",
    subtitle: "",
    description:
      "A sophisticated palette for our principal sponsors, keeping the look polished, classic, and effortlessly elegant.",
    image: ninongImage,
    colors: [
      "#263B46",
    ],
    paletteNames: ["Deep Slate"],
  },
  {
    title: "Ninang",
    subtitle: "",
    description:
      "Elegant and graceful tones selected to complement the wedding palette while allowing each Ninang's personal style to shine.",
    image: ninangImage,
    colors: [
      "#D8C7C4",
      "#E4D7B9",
    ],
    paletteNames: ["Dusty Rose", "Champagne"],
  },
  {
    title: "Guests",
    subtitle: "",
    description:
      "We invite our guests to dress in these lovely tones so that everyone can be part of the colors and atmosphere of our celebration.",
    image: guestLadies,
    colors: [
      "#5E7180",
      "#D8C7C4",
      "#E4D7B9",
      "#C8D8DC",
    ],
    paletteNames: [
      "Slate Blue",
      "Dusty Rose",
      "Champagne",
      "Powder Blue",
    ],
  },

];

const ColorPalette = ({ colors, names }) => {
  return (
    <div className="attire-palette">
      {colors.map((color, index) => (
        <div className="palette-item" key={color}>
          <div
            className="palette-arch"
            style={{ backgroundColor: color }}
            aria-label={names[index]}
            title={names[index]}
          />

          <span>{names[index]}</span>
        </div>
      ))}
    </div>
  );
};

const WeddingAttire = () => {
  return (
    <main className="wedding-attire">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="attire-header">
        <p className="attire-eyebrow">THE WEDDING</p>

        <h1 className="attire-title">
          The Attire
        </h1>

        <span className="attire-divider">
          ♡
        </span>

        <p className="attire-intro">
          We'd love for you to be part of our celebration in
          colors that complement the warmth and beauty of our day.
        </p>
      </header>


      {/* =====================================================
          ATTIRE SECTIONS
      ===================================================== */}

      <div className="attire-list">

        {attireSections.map((section, index) => (
          <section
            className={`attire-section ${index % 2 !== 0 ? "attire-section-reverse" : ""
              }`}
            key={section.title}
          >

            {/* IMAGE */}

            <div className="attire-image-wrapper">
              <div className="attire-image-frame">
                <img
                  src={section.image}
                  alt={`${section.title} wedding attire`}
                />
              </div>
            </div>


            {/* CONTENT */}

            <div className="attire-content">

              <p className="attire-number">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="attire-section-title">
                {section.title}

                {section.subtitle && (
                  <span>{section.subtitle}</span>
                )}
              </h2>

              <div className="attire-small-line" />

              <p className="attire-description">
                {section.description}
              </p>

              <ColorPalette
                colors={section.colors}
                names={section.paletteNames}
              />

            </div>

          </section>
        ))}

      </div>


      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}

      <footer className="attire-footer">
        <span>WITH LOVE</span>

        <p>
          Thank you for dressing with us
          as we celebrate this beautiful beginning.
        </p>

        <span className="attire-footer-heart">♡</span>
      </footer>

    </main>
  );
};

export default WeddingAttire;
