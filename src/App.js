import { useState } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import "./App.css";
import CoverImage from "./assets/images/landing-yellow-escolta.png";
// import Carousel from "./components/Carousel";
import Envelope from "./components/Envelope";
import FloralVideo from "./components/FloralVideo";
import Gifts from "./components/Gifts";
import Landing from "./components/Landing";
import PhotoGallery from "./components/PhotoGallery";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SaveTheDate from "./components/SaveTheDate";
import ThroughTheYears from "./components/ThroughTheYears";
import Venues from "./components/Venues";
import WeddingPlaylist from "./components/WeddingPlaylist2";
import WeddingTimelineScroll from "./components/WeddingTimelineScroll";
import FooterCredits from "./components/FooterCredits";
import RSVP from "./components/RSVP";
import FooterMain from "./components/FooterMain";
import FAQs from "./components/FAQs";
import EngagementCarousel from "./components/EngagementCarousel";
// import Engagement from "./components/Engagement";

function App() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    // Start the landing page from the top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 50);
  };

  const handleBackToEnvelope = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    setOpened(false);
  };

  return (
    <>
      {/* ================================
          ENVELOPE SCREEN
      ================================= */}

      {!opened && <Envelope handleOpen={handleOpen} />}

      {/* ================================
          INVITATION
      ================================= */}

      {opened && (
        <main className="invite">
          <Tooltip title="Back to envelope" placement="left">
            <Fab
              aria-label="Back to envelope"
              onClick={handleBackToEnvelope}
              sx={{
                position: "fixed",
                right: { xs: 16, sm: 24 },
                bottom: { xs: 16, sm: 24 },
                zIndex: 999,

                width: { xs: 48, sm: 56 },
                height: { xs: 48, sm: 56 },

                backgroundColor: "#c7dce8",
                color: "#435c68",

                boxShadow: "0 8px 25px rgba(67, 83, 91, 0.20)",

                "&:hover": {
                  backgroundColor: "#b8d2df",
                  boxShadow: "0 12px 30px rgba(67, 83, 91, 0.25)",
                },

                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <ArrowBackRoundedIcon />
            </Fab>
          </Tooltip>

          {/* STICKY APP BAR */}
          <ResponsiveAppBar />

          {/* LANDING */}
          <Landing coverImage={CoverImage} />

          {/* SAVE THE DATE */}
          <SaveTheDate />

          {/* VENUE */}
          <Venues />

          {/* STORY */}
          <section id="story">
            <ThroughTheYears />
            {/* <Engagement /> */}
            <EngagementCarousel />
            {/* <Carousel /> */}
          </section>

          {/* GALLERY */}
          <section id="gallery">
            <FloralVideo />
            {/* <CinematicVideo /> */}
            <PhotoGallery />
          </section>


          {/* TIMELINE */}
          <section id="timeline">
            <WeddingTimelineScroll />
          </section>

          {/* ENTOURAGE */}
          <section id="entourage" className="section entourage-section">
            <div className="section-label">OUR ENTOURAGE</div>

            <h2>
              Our favorite
              <br />
              people
            </h2>

            <div className="entourage-list">
              <div className="entourage-group">
                <h3>Parents of the Bride</h3>
                <p>Joel & Edna Panlilio</p>
              </div>

              <div className="entourage-group">
                <h3>Parents of the Groom</h3>
                <p>Monico & Susan Bolibol</p>
              </div>

              <div className="entourage-group">
                <h3>Maid of Honor</h3>
                <p>Katelene Panlilio</p>
              </div>

              <div className="entourage-group">
                <h3>Best Man</h3>
                <p>Joshua Soriano</p>
              </div>
            </div>
          </section>

          {/* WEDDING PLAYLIST */}
          <section id="playlist">
            <WeddingPlaylist />
          </section>


          {/* RSVP */}
          <RSVP />

          {/* GIFTS */}
          <Gifts />

          {/* FAQs */}
          <section id="faqs">
            <FAQs />
          </section>

          {/* FOOTER */}
          <FooterMain />
          <FooterCredits />

        </main>
      )}
    </>
  );
}

export default App;
