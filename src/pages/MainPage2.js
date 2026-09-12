import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import "../App.css";
import CoverImage from "../assets/images/landing-yellow-escolta.png";
import FloralVideo from "../components/FloralVideo";
import Gifts from "../components/Gifts";
import Landing from "../components/Landing";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SaveTheDate from "../components/SaveTheDate";
import ThroughTheYears from "../components/ThroughTheYears";
import Venues from "../components/Venues";
import WeddingPlaylist from "../components/WeddingPlaylist2";
import WeddingTimelineScroll from "../components/WeddingTimelineScroll";
import FooterCredits from "../components/FooterCredits";
import RSVP from "../components/RSVP";
import FooterMain from "../components/FooterMain";
import FAQs from "../components/FAQs";
import EngagementCarousel from "../components/EngagementCarousel";
// import Entourage from "../components/Entourage";
import Entourage2 from "../components/Entourage2";
import GalleryPreview2 from "../components/GalleryPreview2";
// import AttireGuide from "./components/AttireGuide";
import OurStoryPreview from "../components/OurStoryPreview";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const handleBackToEnvelope = () => {
    navigate("/");

  };

  return (
    /* ================================
        INVITATION
    ================================= */

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
      <section id="home">
        <Landing coverImage={CoverImage} />
      </section>

      {/* SAVE THE DATE */}
      <section id="invitation">
        <SaveTheDate />
      </section>


      {/* STORY */}
      <section id="journey">
        <ThroughTheYears />
        <OurStoryPreview />
        <EngagementCarousel />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <GalleryPreview2 />
        <FloralVideo />
      </section>

      {/* WEDDING PLAYLIST */}
      <section id="playlist">
        <WeddingPlaylist />
      </section>

      {/* EVENT DETAILS */}
      <section id="event-details">
        {/* ATTIRE GUIDE */}

        {/* VENUES */}
        <Venues />
      </section>

      {/* ENTOURAGE */}
      <section id="entourage" >
        <Entourage2 />
      </section>

      {/* TIMELINE */}
      <section id="timeline">
        <WeddingTimelineScroll />
      </section>

      {/* FAQs */}
      <section id="faqs">
        <FAQs />
      </section>

      {/* GIFTS */}
      <Gifts />

      {/* RSVP */}
      <RSVP />

      {/* FOOTER */}
      <FooterMain />
      <FooterCredits />

    </main>
  );
}

export default MainPage;
