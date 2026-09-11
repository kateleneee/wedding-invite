import React from "react";
import { Box, Typography } from "@mui/material";
import "./Entourage.css";


/* =========================================================
   DATA
   ========================================================= */

const parents = {
  bride: [
    "Bride's Father",
    "Bride's Mother",
  ],

  groom: [
    "Groom's Father",
    "Groom's Mother",
  ],
};


const ninangs = [
  "Ninang Name",
  "Ninang Name",
  "Ninang Name",
  "Ninang Name",
  "Ninang Name",
  "Ninang Name",
  "Ninang Name",
  "Ninang Name",
];


const ninongs = [
  "Ninong Name",
  "Ninong Name",
  "Ninong Name",
  "Ninong Name",
  "Ninong Name",
  "Ninong Name",
  "Ninong Name",
  "Ninong Name",
];


const secondarySponsors = {
  veil: [
    "Veil Sponsor",
    "Veil Sponsor",
  ],

  cord: [
    "Cord Sponsor",
    "Cord Sponsor",
  ],

  candle: [
    "Candle Sponsor",
    "Candle Sponsor",
  ],
};


const maidOfHonor = [
  "Maid of Honor Name",
];


const bestMan = [
  "Best Man Name",
];


const bridesmaids = [
  "Bridesmaid Name",
  "Bridesmaid Name",
  "Bridesmaid Name",
  "Bridesmaid Name",
  "Bridesmaid Name",
  "Bridesmaid Name",
];


const groomsmen = [
  "Groomsman Name",
  "Groomsman Name",
  "Groomsman Name",
  "Groomsman Name",
  "Groomsman Name",
  "Groomsman Name",
];


const ringBearers = [
  "Ring Bearer Name",
];


const flowerAttendants = [
  "Flower Girl Name",
  "Flower Girl Name",
  "Flower Girl / Boy Name",
];


/* =========================================================
   COMPONENTS
   ========================================================= */

function SectionHeading({ children }) {
  return (
    <Box className="entourage-heading">

      <span className="entourage-heading__line" />

      <Typography className="entourage-heading__title">
        {children}
      </Typography>

      <span className="entourage-heading__line" />

    </Box>
  );
}


function PersonName({ children }) {
  return (
    <Typography className="person-name">
      {children}
    </Typography>
  );
}


/* =========================================================
   MAIN
   ========================================================= */

export default function WeddingEntourage() {
  return (
    <Box className="wedding-entourage">

      {/* ARCH FRAME */}

      <div className="wedding-entourage__arch wedding-entourage__arch--outer" />

      <div className="wedding-entourage__arch wedding-entourage__arch--inner" />

      <div className="wedding-entourage__top-mark">
        ✦
      </div>


      {/* =====================================================
          TITLE
      ===================================================== */}

      <header className="entourage-header">

        <Typography className="entourage-header__title">
          The Entourage
        </Typography>

        <div className="entourage-header__rule">
          <span />
          <i>✦</i>
          <span />
        </div>

      </header>


      {/* =====================================================
          PARENTS
      ===================================================== */}

      <section className="entourage-section entourage-section--parents">

        <Typography className="blessing-label">
          With the blessing of our parents
        </Typography>

        <Box className="parents">

          <Box className="parents__side">

            <Typography className="parents__label">
              Bride's Parents
            </Typography>

            <Box className="parents__names">
              {parents.bride.map((name, index) => (
                <PersonName key={index}>
                  {name}
                </PersonName>
              ))}
            </Box>

          </Box>


          <div className="parents__divider" />


          <Box className="parents__side">

            <Typography className="parents__label">
              Groom's Parents
            </Typography>

            <Box className="parents__names">
              {parents.groom.map((name, index) => (
                <PersonName key={index}>
                  {name}
                </PersonName>
              ))}
            </Box>

          </Box>

        </Box>

      </section>


      {/* =====================================================
          PRINCIPAL SPONSORS
      ===================================================== */}

      <section className="entourage-section">

        <SectionHeading>
          Principal Sponsors
        </SectionHeading>

        <Box className="principal-sponsors">

          {/* NINANG */}

          <Box className="sponsor-column">

            <Typography className="sponsor-column__title">
              Ninang
            </Typography>

            <div className="sponsor-column__rule" />

            <Box className="sponsor-column__names">

              {ninangs.map((name, index) => (
                <PersonName key={index}>
                  {name}
                </PersonName>
              ))}

            </Box>

          </Box>


          <div className="principal-sponsors__divider" />


          {/* NINONG */}

          <Box className="sponsor-column">

            <Typography className="sponsor-column__title">
              Ninong
            </Typography>

            <div className="sponsor-column__rule" />

            <Box className="sponsor-column__names">

              {ninongs.map((name, index) => (
                <PersonName key={index}>
                  {name}
                </PersonName>
              ))}

            </Box>

          </Box>

        </Box>

      </section>


      {/* =====================================================
          HONOR ATTENDANTS
      ===================================================== */}

      <section className="entourage-section">

        <SectionHeading>
          Honor Attendants
        </SectionHeading>

        <Box className="honor-attendants">

          <Box className="honor-attendant">

            <Typography className="honor-attendant__role">
              Maid of Honor
            </Typography>

            {maidOfHonor.map((name, index) => (
              <PersonName key={index}>
                {name}
              </PersonName>
            ))}

          </Box>


          <div className="honor-attendants__divider" />


          <Box className="honor-attendant">

            <Typography className="honor-attendant__role">
              Best Man
            </Typography>

            {bestMan.map((name, index) => (
              <PersonName key={index}>
                {name}
              </PersonName>
            ))}

          </Box>

        </Box>

      </section>


      {/* =====================================================
          SECONDARY SPONSORS
      ===================================================== */}

      <section className="entourage-section">

        <SectionHeading>
          Secondary Sponsors
        </SectionHeading>

        <Box className="secondary-sponsors">

          <Box className="secondary-sponsor">

            <Typography className="secondary-sponsor__title">
              Veil
            </Typography>

            <div className="secondary-sponsor__mark">
              — ✦ —
            </div>

            {secondarySponsors.veil.map((name, index) => (
              <PersonName key={index}>
                {name}
              </PersonName>
            ))}

          </Box>


          <Box className="secondary-sponsor">

            <Typography className="secondary-sponsor__title">
              Cord
            </Typography>

            <div className="secondary-sponsor__mark">
              — ✦ —
            </div>

            {secondarySponsors.cord.map((name, index) => (
              <PersonName key={index}>
                {name}
              </PersonName>
            ))}

          </Box>


          <Box className="secondary-sponsor">

            <Typography className="secondary-sponsor__title">
              Candle
            </Typography>

            <div className="secondary-sponsor__mark">
              — ✦ —
            </div>

            {secondarySponsors.candle.map((name, index) => (
              <PersonName key={index}>
                {name}
              </PersonName>
            ))}

          </Box>

        </Box>

      </section>




      {/* =====================================================
          BRIDESMAIDS
      ===================================================== */}

      <section className="entourage-section">

        <SectionHeading>
          Bridesmaids
        </SectionHeading>

        <Box className="party-grid">

          {bridesmaids.map((name, index) => (
            <PersonName key={index}>
              {name}
            </PersonName>
          ))}

        </Box>

      </section>


      {/* =====================================================
          GROOMSMEN
      ===================================================== */}

      <section className="entourage-section">

        <SectionHeading>
          Groomsmen
        </SectionHeading>

        <Box className="party-grid">

          {groomsmen.map((name, index) => (
            <PersonName key={index}>
              {name}
            </PersonName>
          ))}

        </Box>

      </section>


      {/* =====================================================
          RING BEARER
      ===================================================== */}

      <section className="entourage-section entourage-section--small">

        <SectionHeading>
          Ring Bearer
        </SectionHeading>

        <Box className="single-person">

          {ringBearers.map((name, index) => (
            <PersonName key={index}>
              {name}
            </PersonName>
          ))}

        </Box>

      </section>


      {/* =====================================================
          FLOWER GIRLS / GUYS
      ===================================================== */}

      <section className="entourage-section entourage-section--small">

        <SectionHeading>
          Flower Girls &amp; Guys
        </SectionHeading>

        <Box className="children-list">

          {flowerAttendants.map((name, index) => (
            <PersonName key={index}>
              {name}
            </PersonName>
          ))}

        </Box>

      </section>


      {/* FOOTER */}

      <footer className="entourage-footer">

        <span />

        <Typography>
          WITH LOVE &amp; GRATITUDE
        </Typography>

        <span />

      </footer>

    </Box>
  );
}