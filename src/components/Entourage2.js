import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import "./Entourage2.css";

/*
|--------------------------------------------------------------------------
| WEDDING ENTourage DATA
|--------------------------------------------------------------------------
| Replace these names with your actual entourage.
*/

const brideParents = [
  "Joel D. Panlilio",
  "Edna P. Panlilio",
];

const groomParents = [
  "Monico Bolibol",
  "Susan Bolibol",
];

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

const veilSponsors = [
  "Veil Sponsor",
  "Veil Sponsor",
];

const cordSponsors = [
  "Cord Sponsor",
  "Cord Sponsor",
];

const candleSponsors = [
  "Candle Sponsor",
  "Candle Sponsor",
];

const bridesmaids = [
  "Bridesmaid Name",
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
  "Groomsman Name",
];

const maidOfHonor = "Katelene Panlilio";
const bestMan = "Joshua Soriano";

const ringBearer = "Ring Bearer Name";

const flowerAttendants = [
  "Flower Girl Name",
  "Flower Girl Name",
  "Flower Girl / Boy Name",
];


/*
|--------------------------------------------------------------------------
| SCROLL REVEAL
|--------------------------------------------------------------------------
*/

function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const elements = container.querySelectorAll(
      "[data-reveal]"
    );

    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("reveal-visible");
      });

      return;
    }

    elements.forEach((element) => {
      element.classList.add("reveal-hidden");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove("reveal-hidden");
          entry.target.classList.add("reveal-visible");

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
}


/*
|--------------------------------------------------------------------------
| SMALL COMPONENTS
|--------------------------------------------------------------------------
*/

function GoldLine() {
  return (
    <span className="gold-line" />
  );
}


function SectionTitle({ children }) {
  return (
    <div
      className="entourage-section-title"
      data-reveal
    >
      <GoldLine />

      <Typography>
        {children}
      </Typography>

      <GoldLine />
    </div>
  );
}


function Name({ children }) {
  return (
    <Typography className="entourage-name">
      {children}
    </Typography>
  );
}


function Names({ people }) {
  return (
    <>
      {people.map((person, index) => (
        <Name key={`${person}-${index}`}>
          {person}
        </Name>
      ))}
    </>
  );
}


/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

export default function WeddingEntourage() {
  const containerRef = useScrollReveal();

  return (
    <Box
      ref={containerRef}
      className="entourage-page"
    >

      {/* =====================================================
          DECORATIVE ARCH
      ===================================================== */}

      <div className="entourage-arch entourage-arch-outer" />
      <div className="entourage-arch entourage-arch-inner" />

      <div className="arch-top-ornament">
        <span />
        ✦
        <span />
      </div>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="entourage-header"
        data-reveal
      >

        <Typography className="header-small">
          THE WEDDING
        </Typography>

        <Typography className="header-title">
          Entourage
        </Typography>

        <div className="header-ornament">
          <span />
          <b>✦</b>
          <span />
        </div>

      </header>


      {/* =====================================================
          PARENTS
      ===================================================== */}

      <section className="entourage-section">

        <Typography
          className="parent-blessing"
          data-reveal
        >
          With the blessing of our parents
        </Typography>

        <div
          className="parents-layout"
          data-reveal
        >

          <div className="parent-side">

            <Typography className="small-label">
              Bride's Parents
            </Typography>

            <div className="names-stack">
              <Names people={brideParents} />
            </div>

          </div>


          <div className="center-divider">
            <span />
            <i>✦</i>
            <span />
          </div>


          <div className="parent-side">

            <Typography className="small-label">
              Groom's Parents
            </Typography>

            <div className="names-stack">
              <Names people={groomParents} />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPAL SPONSORS
      ===================================================== */}

      <section className="entourage-section">

        <SectionTitle>
          Principal Sponsors
        </SectionTitle>

        <div
          className="principal-grid"
          data-reveal
        >

          <div className="sponsor-group">

            <Typography className="role-title">
              Ninang
            </Typography>

            <div className="gold-short-line" />

            <div className="sponsor-names">
              <Names people={ninangs} />
            </div>

          </div>


          <div className="vertical-rule" />


          <div className="sponsor-group">

            <Typography className="role-title">
              Ninong
            </Typography>

            <div className="gold-short-line" />

            <div className="sponsor-names">
              <Names people={ninongs} />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HONOR ATTENDANTS
      ===================================================== */}

      <section className="entourage-section">

        <SectionTitle>
          Honor Attendants
        </SectionTitle>

        <div
          className="honor-grid"
          data-reveal
        >

          <div className="honor-person">

            <Typography className="role-title">
              Maid of Honor
            </Typography>

            <Name>
              {maidOfHonor}
            </Name>

          </div>


          <div className="honor-center">
            <span />
            {/* <i>✦</i> */}
            {/* <span /> */}
          </div>


          <div className="honor-person">

            <Typography className="role-title">
              Best Man
            </Typography>

            <Name>
              {bestMan}
            </Name>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECONDARY SPONSORS
      ===================================================== */}

      <section className="entourage-section">

        <SectionTitle>
          Secondary Sponsors
        </SectionTitle>

        <div
          className="secondary-grid"
          data-reveal
        >

          <div className="secondary-group">

            <Typography className="role-title">
              Veil
            </Typography>

            <div className="blue-diamond">
              ◆
            </div>

            <Names people={veilSponsors} />

          </div>


          <div className="secondary-group">

            <Typography className="role-title">
              Cord
            </Typography>

            <div className="blue-diamond">
              ◆
            </div>

            <Names people={cordSponsors} />

          </div>


          <div className="secondary-group">

            <Typography className="role-title">
              Candle
            </Typography>

            <div className="blue-diamond">
              ◆
            </div>

            <Names people={candleSponsors} />

          </div>

        </div>

      </section>

      {/* =====================================================
    BRIDAL PARTY
===================================================== */}

      <section className="entourage-section">

        <SectionTitle>
          Bridal Party
        </SectionTitle>

        <div
          className="bridal-party-grid"
          data-reveal
        >

          {/* -------------------------------------------------
        BRIDESMAIDS
    ------------------------------------------------- */}

          <div className="bridal-party-group">

            <p className="party-role">
              Bridesmaids
            </p>

            <div className="party-names">
              {bridesmaids.map((name, index) => (
                <Name key={`bridesmaid-${name}-${index}`}>
                  {name}
                </Name>
              ))}
            </div>

          </div>


          {/* -------------------------------------------------
        GROOMSMEN
    ------------------------------------------------- */}

          <div className="bridal-party-group">

            <p className="party-role">
              Groomsmen
            </p>

            <div className="party-names">
              {groomsmen.map((name, index) => (
                <Name key={`groomsman-${name}-${index}`}>
                  {name}
                </Name>
              ))}
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          BRIDESMAIDS
      ===================================================== */}

      {/* <section className="entourage-section">

        <SectionTitle>
          Bridesmaids
        </SectionTitle>

        <div
          className="party-grid"
          data-reveal
        >
          {bridesmaids.map((name, index) => (
            <Name key={`${name}-${index}`}>
              {name}
            </Name>
          ))}
        </div>

      </section> */}


      {/* =====================================================
          GROOMSMEN
      ===================================================== */}

      {/* <section className="entourage-section">

        <SectionTitle>
          Groomsmen
        </SectionTitle>

        <div
          className="party-grid"
          data-reveal
        >
          {groomsmen.map((name, index) => (
            <Name key={`${name}-${index}`}>
              {name}
            </Name>
          ))}
        </div>

      </section> */}


      {/* =====================================================
          RING BEARER
      ===================================================== */}

      <section className="entourage-section compact-section">

        <SectionTitle>
          Ring Bearer
        </SectionTitle>

        <div
          className="single-name"
          data-reveal
        >
          <Name>
            {ringBearer}
          </Name>
        </div>

      </section>


      {/* =====================================================
          FLOWER GIRLS / GUYS
      ===================================================== */}

      <section className="entourage-section compact-section">

        <SectionTitle>
          Flower Girls &amp; Guys
        </SectionTitle>

        <div
          className="children-grid"
          data-reveal
        >

          {flowerAttendants.map((name, index) => (
            <Name key={`${name}-${index}`}>
              {name}
            </Name>
          ))}

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      {/* <footer
        className="entourage-footer"
        data-reveal
      >

        <div className="footer-line" />

        <Typography>
          WITH LOVE &amp; GRATITUDE
        </Typography>

        <div className="footer-line" />

      </footer> */}

    </Box>
  );
}