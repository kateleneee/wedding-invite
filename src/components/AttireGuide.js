import React from "react";
import "./AttireGuide.css";

import attireGuideSponsors from "../assets/images/sponsors-attire-final-2.png";
import attireGuideGuests from "../assets/images/guest-attire-final.png";
import mainColorPalette from "../assets/images/main-color-palette.png";

/* =========================================================
   PALETTE COMPONENT
========================================================= */

// const ColorPalette = ({ colors }) => {
//   return (
//     <div className="color-palette">
//       {colors.map((color, index) => (
//         <div className="palette-item" key={index}>
//           <div
//             className="palette-arch"
//             style={{ backgroundColor: color.value }}
//           />

//           <span className="palette-name">
//             {color.name}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

/* =========================================================
   ATTIRE GUIDE
========================================================= */

const AttireGuide = () => {
  // const colors = [
  //   {
  //     name: "Powder Blue",
  //     value: "#DCEBF0",
  //   },
  //   {
  //     name: "Dusty Blue",
  //     value: "#9BB7C5",
  //   },
  //   {
  //     name: "Champagne",
  //     value: "#E8D9B5",
  //   },
  //   {
  //     name: "Soft Yellow",
  //     value: "#FFF1B8",
  //   },
  // ];

  return (
    <main className="attire-page">

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

      {/* <ColorPalette colors={colors} /> */}
      <div className="attire-image-wrapper">
        <img
          src={mainColorPalette}
          alt="Wedding attire guide sponsors"
          className="attire-image"
        />
      </div>
      <br />
      <br />
      <div className="attire-image-wrapper">
        <img
          src={attireGuideSponsors}
          alt="Wedding attire guide sponsors"
          className="attire-image"
        />
      </div>
      <br />
      <br />

      <div className="attire-image-wrapper">
        <img
          src={attireGuideGuests}
          alt="Wedding attire guide guests"
          className="attire-image"
        />
      </div>

    </main>
  );
};

export default AttireGuide;
