import { useState } from "react";
import {
  // CalendarDays,
  Heart,
  // ChevronDown,
  ExternalLink,
  // Mail,
  Gift,
  // Camera,
  // Users,
} from "lucide-react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import "./App.css";
import Envelope from "./components/Envelope";
import PhotoGallery from "./components/PhotoGallery";
import Venues from "./components/Venues";
import WeddingTimeline from "./components/WeddingTimeline";
import WeddingPlaylist from "./components/WeddingPlaylist";
import engagement from "./assets/images/engagement1.jpg";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SaveTheDate from "./components/SaveTheDate";
import Landing from "./components/Landing";
import CoverImage from "./assets/images/landing-yellow-escolta.png";

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
          <section id="story" className="section story-section">
            <div className="story-image">
              {/* <div className="image-placeholder">
                YOUR PHOTO
              </div> */}
              <img
                src={engagement}
                alt={"engagement"}
                className="lightbox-image"
              />
            </div>

            <div className="story-content">
              <div className="section-label">OUR STORY</div>

              <h2>
                From this moment
                <br />
                to forever
              </h2>

              <p>
                What started as a simple hello slowly became something neither
                of us expected.
              </p>

              <p>
                Through ordinary days, little adventures, laughter, challenges,
                and countless memories, we found our way to each other.
              </p>

              <p>
                And now, we're excited to begin our next chapter together—with
                the people we love most by our side.
              </p>

              <div className="heart-divider">
                <span />
                <Heart size={18} fill="currentColor" />
                <span />
              </div>
            </div>
          </section>

          {/* GALLERY */}
          <PhotoGallery />

          {/* TIMELINE */}
          <WeddingTimeline />

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
          <section id="gifts" className="section gifts-section">
            <div className="section-label">GIFT GUIDE</div>

            <h2>
              Your presence
              <br />
              is our present
            </h2>

            <p>
              Your presence on our special day means more to us than anything.
            </p>

            <div className="gift-box">
              <Gift size={30} />

              <p>
                If you wish to bless us with a gift, a contribution toward our
                future together would be deeply appreciated.
              </p>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="footer">
            <Heart size={22} fill="currentColor" />

            <h2>Daniel & Kaylene</h2>
            <p>We can't wait to celebrate with you.</p>
            <small>#DanielAndKaylene</small>
          </footer>
        </main>
      )}
    </>
  );
}

export default App;
