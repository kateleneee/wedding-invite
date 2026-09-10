import { useState } from "react";
import {
  // CalendarDays,
  // Heart,
  // ChevronDown,
  ExternalLink,
  // Mail,
  // Gift,
  // Camera,
  // Users,
} from "lucide-react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import "./App.css";
import CoverImage from "./assets/images/landing-yellow-escolta.png";
import Carousel from "./components/Carousel";
import Envelope from "./components/Envelope";
import FloralVideo from "./components/FloralVideo";
import Gifts from "./components/Gifts";
import Landing from "./components/Landing";
import PhotoGallery from "./components/PhotoGallery";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SaveTheDate from "./components/SaveTheDate";
import ThroughTheYears from "./components/ThroughTheYears";
import Venues from "./components/Venues";
import WeddingPlaylist from "./components/WeddingPlaylist";
import WeddingTimelineScroll from "./components/WeddingTimelineScroll";

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
            <Carousel />
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
          <WeddingPlaylist />

          {/* RSVP */}
          <section id="rsvp" className="section rsvp-section">
            <div className="section-label">RSVP</div>

            <h2>
              Will you join
              <br />
              us?
            </h2>

            <p>We'd love to celebrate this special day with you.</p>

            <div className="rsvp-card">
              <h3>Kindly respond by</h3>

              <strong>October 15, 2026</strong>

              <p>Please let us know if you'll be able to celebrate with us.</p>

              <a
                className="primary-button"
                href="https://forms.google.com"
                target="_blank"
                rel="noreferrer"
              >
                RSVP Now
                <ExternalLink size={16} />
              </a>
            </div>
          </section>

          {/* GIFTS */}
          <Gifts />


          {/* FOOTER */}
          <footer className="footer">
            {/* <Heart size={22} fill="currentColor" /> */}

            <h2>Daniel & Kaylene</h2>
            <p>Please use the hashtags below when sharing the photos online.</p>
            <small>#DJfoundtheKAYEtoforever</small>
            <br />
            <small>#LovinKAYEeveryDJay</small>
          </footer>
        </main>
      )}
    </>
  );
}

export default App;
