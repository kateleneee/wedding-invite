import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Heart,
  ChevronDown,
  ExternalLink,
  Mail,
  Gift,
  Camera,
  Users,
  ArrowLeft,
} from "lucide-react";

import "./App2.css";

function App() {
  const [opened, setOpened] = useState(false);

  const links = [
    {
      title: "The Wedding",
      subtitle: "When & where",
      icon: <CalendarDays size={24} />,
      target: "wedding",
    },
    {
      title: "Our Story",
      subtitle: "How it all began",
      icon: <Heart size={24} />,
      target: "story",
    },
    {
      title: "Entourage",
      subtitle: "Our favorite people",
      icon: <Users size={24} />,
      target: "entourage",
    },
    {
      title: "RSVP",
      subtitle: "We'd love to celebrate with you",
      icon: <Mail size={24} />,
      target: "rsvp",
    },
    {
      title: "Gift Guide",
      subtitle: "Your presence is enough",
      icon: <Gift size={24} />,
      target: "gifts",
    },
    {
      title: "Gallery",
      subtitle: "A few favorite moments",
      icon: <Camera size={24} />,
      target: "gallery",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

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

      {!opened && (
        <main className="envelope-screen">
          <div className="background-flower flower-one">
            ✿
          </div>

          <div className="background-flower flower-two">
            ✽
          </div>

          <div className="envelope-wrapper">

            <button
              className="envelope-button"
              onClick={handleOpen}
              aria-label="Open wedding invitation"
            >
              <div className="envelope-image-wrapper">

                <img
                  src="/images/envelope.png"
                  alt="Wedding invitation envelope"
                  className="envelope-image"
                />

                <div className="wax-seal">
                  <img
                    src="/images/wax-seal.png"
                    alt=""
                    className="wax-seal-image"
                  />
                </div>

              </div>
            </button>

            <div className="open-text">
              {/* <ChevronDown size={16} /> */}
              <span>Click to open</span>
            </div>

          </div>
        </main>
      )}

      {/* ================================
          INVITATION
      ================================= */}

      {opened && (
        <main className="invite">

          {/* BACK TO ENVELOPE */}

          <button
            className="back-envelope-button"
            onClick={handleBackToEnvelope}
          >
            <ArrowLeft size={17} />
            <span>Back to envelope</span>
          </button>

          {/* HERO */}

          <section className="hero">

            <div className="hero-decoration top-left">
              ✿
            </div>

            <div className="hero-decoration top-right">
              ✽
            </div>

            <p className="eyebrow">
              TOGETHER WITH THEIR FAMILIES
            </p>

            <h1 className="couple-name">
              Sofia
              <span>&</span>
              Miguel
            </h1>

            <p className="hero-description">
              Joyfully invite you to celebrate
              <br />
              their wedding day
            </p>

            <div className="hero-date">
              <span>15</span>

              <div>
                <small>NOVEMBER</small>
                <strong>2026</strong>
              </div>
            </div>

            <button
              className="scroll-button"
              onClick={() =>
                scrollToSection("navigation")
              }
            >
              Explore our invitation
              <ChevronDown size={18} />
            </button>

          </section>

          {/* NAVIGATION */}

          <section
            id="navigation"
            className="navigation-section"
          >

            <div className="section-heading">

              <span>WELCOME</span>

              <h2>
                We saved a little
                <br />
                something for you
              </h2>

              <p>
                Tap any card below to explore our
                wedding details.
              </p>

            </div>

            <div className="link-grid">

              {links.map((link) => (

                <button
                  key={link.target}
                  className="link-card"
                  onClick={() =>
                    scrollToSection(link.target)
                  }
                >

                  <div className="link-icon">
                    {link.icon}
                  </div>

                  <div className="link-text">

                    <h3>{link.title}</h3>

                    <p>
                      {link.subtitle}
                    </p>

                  </div>

                  <ExternalLink size={16} />

                </button>

              ))}

            </div>

          </section>

          {/* WEDDING */}

          <section
            id="wedding"
            className="section wedding-section"
          >

            <div className="section-label">
              THE WEDDING
            </div>

            <h2>
              Save the
              <br />
              date
            </h2>

            <div className="date-card">

              <div className="date-number">
                15
              </div>

              <div className="date-info">
                <span>NOVEMBER</span>
                <strong>2026</strong>
              </div>

            </div>

            <div className="details-grid">

              <div className="detail">
                <CalendarDays />

                <span>DATE</span>

                <strong>
                  Sunday, November 15
                </strong>
              </div>

              <div className="detail">
                <Clock />

                <span>TIME</span>

                <strong>
                  4:00 PM
                </strong>
              </div>

              <div className="detail">
                <MapPin />

                <span>VENUE</span>

                <strong>
                  The Garden Venue
                </strong>

                <small>
                  Makati City, Philippines
                </small>
              </div>

            </div>

            <a
              className="primary-button"
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              View venue on Google Maps
              <ExternalLink size={16} />
            </a>

          </section>

          {/* STORY */}

          <section
            id="story"
            className="section story-section"
          >

            <div className="story-image">
              <div className="image-placeholder">
                YOUR PHOTO
              </div>
            </div>

            <div className="story-content">

              <div className="section-label">
                OUR STORY
              </div>

              <h2>
                From this moment
                <br />
                to forever
              </h2>

              <p>
                What started as a simple hello slowly
                became something neither of us expected.
              </p>

              <p>
                Through ordinary days, little adventures,
                laughter, challenges, and countless
                memories, we found our way to each other.
              </p>

              <p>
                And now, we're excited to begin our next
                chapter together—with the people we love
                most by our side.
              </p>

              <div className="heart-divider">
                <span />
                <Heart size={18} fill="currentColor" />
                <span />
              </div>

            </div>

          </section>

          {/* ENTOURAGE */}

          <section
            id="entourage"
            className="section entourage-section"
          >

            <div className="section-label">
              OUR ENTOURAGE
            </div>

            <h2>
              Our favorite
              <br />
              people
            </h2>

            <div className="entourage-list">

              <div className="entourage-group">
                <h3>
                  Parents of the Bride
                </h3>
                <p>
                  Juan & Maria Santos
                </p>
              </div>

              <div className="entourage-group">
                <h3>
                  Parents of the Groom
                </h3>
                <p>
                  Pedro & Ana Cruz
                </p>
              </div>

              <div className="entourage-group">
                <h3>Maid of Honor</h3>
                <p>
                  Isabella Santos
                </p>
              </div>

              <div className="entourage-group">
                <h3>Best Man</h3>
                <p>
                  Daniel Cruz
                </p>
              </div>

            </div>

          </section>

          {/* RSVP */}

          <section
            id="rsvp"
            className="section rsvp-section"
          >

            <div className="section-label">
              RSVP
            </div>

            <h2>
              Will you join
              <br />
              us?
            </h2>

            <p>
              We'd love to celebrate this special day
              with you.
            </p>

            <div className="rsvp-card">

              <h3>
                Kindly respond by
              </h3>

              <strong>
                October 15, 2026
              </strong>

              <p>
                Please let us know if you'll be able
                to celebrate with us.
              </p>

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

          <section
            id="gifts"
            className="section gifts-section"
          >

            <div className="section-label">
              GIFT GUIDE
            </div>

            <h2>
              Your presence
              <br />
              is our present
            </h2>

            <p>
              Your presence on our special day means
              more to us than anything.
            </p>

            <div className="gift-box">

              <Gift size={30} />

              <p>
                If you wish to bless us with a gift,
                a contribution toward our future
                together would be deeply appreciated.
              </p>

            </div>

          </section>

          {/* GALLERY */}

          <section
            id="gallery"
            className="section gallery-section"
          >

            <div className="section-label">
              OUR MOMENTS
            </div>

            <h2>
              A little glimpse
              <br />
              of us
            </h2>

            <div className="gallery-grid">

              <div className="gallery-item">
                PHOTO 01
              </div>

              <div className="gallery-item">
                PHOTO 02
              </div>

              <div className="gallery-item">
                PHOTO 03
              </div>

              <div className="gallery-item">
                PHOTO 04
              </div>

            </div>

          </section>

          {/* FOOTER */}

          <footer className="footer">

            <Heart
              size={22}
              fill="currentColor"
            />

            <h2>
              Sofia & Miguel
            </h2>

            <p>
              We can't wait to celebrate with you.
            </p>

            <small>
              #SofiaAndMiguel
            </small>

          </footer>

        </main>
      )}
    </>
  );
}

export default App;