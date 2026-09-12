import React, { useEffect, useState } from "react";
import "./OurStoryPage.css";
import { useNavigate } from "react-router-dom";
import { Fab, Tooltip } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// import storyCollege from "../assets/images/CollegeDays/5.jpg";
// Replace these with your actual photos
// import storyProposal from "../assets/images/proposal.jpg";
// import storyCouple from "../assets/images/couple.jpg";

const chapters = [
  {
    number: "01",
    title: "The First Chat",
    intro: "It didn't start with love at first sight.",
    paragraphs: [
      `So, how did Kaye and DJ actually get here? Well… surprisingly, it did not start with love at first sight. 😂`,

      `Kaye first met DJ way back in their first year of college. And their first conversations? Definitely not romantic. DJ’s opening topic was basically… his breakup stories with his ex. HAHAHA.`,

      `And Kaye, being Kaye, listened. She consoled him, gave him someone to talk to, and was just there because she could tell that he needed someone to listen.`,

      `DJ, of course, would always say, “Okay na ako. Those are just stories na lang. I’m happy already.” But apparently… he was very happy.`,

      `Because after all those breakup conversations, the two of them just kept talking. They became close through chat. Very madaldal sa chat. But in person? Crickets. 😂`,

      `They had different friend groups, so they didn't really talk much whenever they were together. Their friendship mostly existed through their phones.`
    ],
    quote: "Very madaldal sa chat. But in person? Crickets. 😂"
  },

  {
    number: "02",
    title: "Definitely Not My Type",
    intro: "And then… DJ started nanghaharot.",
    paragraphs: [
      `Until one day, Kaye started noticing something. DJ was no longer just telling stories. Nanghaharot na ang kuya nyo. 😂`,

      `And Kaye immediately went: “Nope.”`,

      `Because at that time, Kaye was NOT looking for a boyfriend. She was focused on her studies, very grade-conscious, very independent, and honestly… not ready for love.`,

      `Plus, if we're being completely honest… DJ was not her type. Like, not even remotely. 😂`,

      `Kaye was the kind of girl who, the moment she sensed that someone wanted to pursue her, would immediately back away.`,

      `So when DJ started buying her food, getting her drinks, checking if she got home safely, and doing all these sweet little gestures… Kaye found it CRINGE. Very cringe. Like, “Please stop. What are you doing?!” cringe. 😂`
    ],
    quote: "DJ was not her type. Like, not even remotely. 😂"
  },

  {
    number: "03",
    title: "The Fake Boyfriend",
    intro: "Kaye had a plan.",
    paragraphs: [
      `And because Kaye was determined to make this guy back off, she came up with a plan.`,

      `She asked one of her guy friends to fake-court her.`,

      `Yes. A fake boyfriend.`,

      `Unfortunately, the plan failed because her guy friend was also DJ’s friend and apparently had enough loyalty to say, “Sorry Kaye, I can't. I don't want to get in the way of DJ’s plans.” HAHAHAHA.`,

      `So Kaye was basically left with no choice but to deal with DJ herself.`
    ],
    quote: "Yes. A fake boyfriend.",
    badge: "PLAN: FAILED 😂"
  },

  {
    number: "04",
    title: "The Accounting Era",
    intro: "Then Kaye discovered something unexpected.",
    paragraphs: [
      `Somewhere in the middle of college, Kaye started realizing and noticing that DJ was actually… smart. Especially in accounting.`,

      `In fact, during their first year, DJ was basically the “kopyahan ng bayan” whenever there were assignments. 😂`,

      `And Kaye, being the grade-conscious girl that she was, eventually thought:`,

      `“Wait a minute…”`,

      `“This guy is smart.”`,

      `“I can use this.” HAHAHAHA.`,

      `And so began one of the most practical friendships in history.`,

      `Kaye became friends with DJ because, apparently, having a smart accounting friend was useful. They started reviewing together, helping each other with assignments, preparing for tests, and spending more and more time together.`,

      `And somewhere along the way, without either of them really noticing… something changed.`
    ],
    quote: "This guy is smart. I can use this. 😂"
  },

  {
    number: "05",
    title: "The Waiting Game",
    intro: "Kaye finally gave DJ the rules.",
    paragraphs: [
      `Eventually, Kaye sat DJ down and gave him the rules.`,

      `If he really wanted to pursue her, he had to wait.`,

      `They had to finish college first. They had to focus on their studies. And if, after all that, they still felt the same way… then they could figure it out.`,

      `And DJ?`,

      `He waited.`,

      `Fast-forward through the rest of college… They both made it. They graduated.`,

      `And eventually, the girl who once thought DJ was definitely not her type finally gave him her yes. ❤️`,

      `And that “yes” became the beginning of everything else.`
    ],
    quote: "And DJ? He waited."
  },

  {
    number: "06",
    title: "Growing Together",
    intro: "From college days to building a life.",
    paragraphs: [
      `They went through CPALE review days together. They stressed together. They prayed together. They celebrated when they finally passed.`,

      `Then came their dream jobs, their careers, and eventually working in two of the Big 4 firms in the Philippines.`,

      `They grew together—not just as a couple, but as two people trying to build their own lives.`,

      `And of course, their relationship wasn't always rainbows and butterflies.`,

      `Because after 13 years, there are bound to be difficult seasons. There were arguments, struggles, disappointments, changes, and moments when both of them had to learn how to love each other better.`
    ]
  },

  {
    number: "07",
    title: "He Stayed",
    intro: "Sometimes love is simply choosing to stay.",
    paragraphs: [
      `And there came a point when Kaye went through one of the darkest seasons of her life.`,

      `She was carrying so much within herself, and she felt like there were so many things in her own life that she needed to fix, heal, and figure out first.`,

      `She felt like she was no longer able to give DJ the kind of love she knew he deserved.`,

      `And she reached a point where she thought maybe… maybe she needed to let him go.`,

      `But DJ didn't leave.`,

      `He stayed. He stayed through the messy parts. He stayed when things weren't easy. He stayed even when Kaye herself wasn't sure how to stay.`,

      `And that was when Kaye finally realized something.`,

      `The guy she once thought was not her type… The guy she tried to push away… The guy she even tried to scare off with a fake suitor… was actually the person who would stay beside her when she needed someone the most.`,

      `And that changed everything.`
    ],
    quote: "But DJ didn't leave. He stayed."
  },

  {
    number: "08",
    title: "The Plot Twist",
    intro: "The girl who said no… eventually knew.",
    paragraphs: [
      `Because Kaye realized that DJ's love wasn't just about the sweet gestures, the food, the checking-in, or the cute boyfriend things he used to do.`,

      `It was deeper than that.`,

      `He was patient. He was thoughtful. He was kind. He was the kind of person who would keep choosing her, even when loving her wasn't always easy.`,

      `And little by little, DJ softened Kaye's very, very tough heart.`,

      `The girl who once said, “I don't like him.” became the girl who eventually said,`,

      `“This is the man I want to spend the rest of my life with.”`,

      `And honestly, what a plot twist. 😂❤️`
    ],
    quote: "This is the man I want to spend the rest of my life with."
  },

  {
    number: "09",
    title: "To DJ",
    intro: "And now, here we are.",
    paragraphs: [
      `So when DJ proposed last year, there wasn't really anything left to think about. Kaye said yes. ❤️`,

      `Because after everything they've been through, she already knew.`,

      `She knew that this was the person she could build a life with. The person who would celebrate with her when life is good. The person who would hold her hand when life isn't.`,

      `The person who would continue to grow with her, laugh with her, annoy her, support her, and probably still buy her food even after all these years. 😂`,

      `And today, we are here because that little college story that started with breakup stories, awkward chats, accounting assignments, one failed fake-courtship plan, and a girl who absolutely did NOT want a boyfriend… somehow became this.`,

      `13 years of knowing each other. 9 years of being boyfriend and girlfriend. And now… a lifetime of being husband and wife. 🤍`
    ],
    quote: "13 years of knowing each other. 9 years of being boyfriend and girlfriend. And now… a lifetime of being husband and wife. 🤍"
  },

  {
    number: "10",
    title: "Where She's Running To",
    intro: "Maybe love was quietly growing there all along.",
    paragraphs: [
      `Looking back, maybe Kaye didn't recognize it at first.`,

      `Maybe she didn't see it when DJ was buying her food. Maybe she didn't see it when he was checking if she got home safely. Maybe she didn't even see it when she was “befriending” him mainly because he was good at accounting. 😂`,

      `But perhaps love was quietly growing there all along.`,

      `And after all the years, all the growing, all the struggles, all the laughter, all the achievements, and all the seasons they've survived together…`,

      `Kaye can finally say with all her heart: It was all worth it.`,

      `And if she had the chance to go back to that first year of college and meet DJ all over again… Maybe this time, she wouldn't run away.`,

      `Well… Maybe. 😂 Because let's be honest—she's still Kaye.`,

      `But this time, she knows exactly where she's running to.`
    ],
    final: true
  }
];

const OurStory = () => {
  const navigate = useNavigate();

  const [activeChapter, setActiveChapter] = useState(0);

  const chapter = chapters[activeChapter];

  const handleBack = () => {
    navigate(-1);
  };

  const goToChapter = (index) => {
    setActiveChapter(index);

    window.scrollTo({
      top: document.getElementById("our-story")?.offsetTop ?? 0,
      behavior: "smooth"
    });
  };

  const nextChapter = () => {
    if (activeChapter < chapters.length - 1) {
      setActiveChapter((current) => current + 1);
    }
  };

  const previousChapter = () => {
    if (activeChapter > 0) {
      setActiveChapter((current) => current - 1);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section className="our-story" id="our-story">
      <Tooltip title="Back" placement="left">
        <Fab
          aria-label="Back "
          onClick={handleBack}
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
      <div className="story-shell">

        {/* Header */}

        <header className="story-header">
          <span className="story-kicker">OUR STORY</span>

          {/* <h2>
            Kaye <span>&</span> DJ
          </h2> */}

          <p>
            A story that started with breakup stories,
            accounting, and one failed fake boyfriend.
          </p>
        </header>


        {/* Story Cover */}

        {/* <div className="story-cover">
          <img
            src={storyCollege}
            alt="Kaye and DJ"
          />

          <div className="story-cover-overlay">
            <span>THEN & NOW</span>

            <strong>
              13 YEARS
            </strong>

            <small>
              of knowing each other
            </small>

            <div className="story-cover-divider" />

            <strong>
              1 LIFETIME
            </strong>

            <small>
              still to come
            </small>
          </div>
        </div> */}


        {/* Chapter Navigation */}

        <nav className="story-chapters" aria-label="Story chapters">
          {chapters.map((item, index) => (
            <button
              key={item.number}
              className={
                index === activeChapter
                  ? "story-chapter active"
                  : "story-chapter"
              }
              onClick={() => goToChapter(index)}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </nav>


        {/* Chapter */}

        <article className="story-content">

          <div className="story-chapter-heading">
            <span className="story-chapter-number">
              CHAPTER {chapter.number}
            </span>

            <h3>{chapter.title}</h3>

            <p>{chapter.intro}</p>
          </div>


          {chapter.quote && (
            <blockquote className="story-quote">
              <span>“</span>
              {chapter.quote}
              <span>”</span>
            </blockquote>
          )}


          {chapter.badge && (
            <div className="story-badge">
              {chapter.badge}
            </div>
          )}


          <div className="story-text">
            {chapter.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>


          {chapter.final && (
            <div className="story-ending">
              <span>AND THIS TIME...</span>

              <h3>
                She knows exactly
                <br />
                where she's running to.
              </h3>

              <div className="story-heart">♡</div>
              <p>To DJ.</p>
            </div>
          )}

        </article>


        {/* Navigation */}

        <div className="story-navigation">

          <button
            className="story-nav-button"
            onClick={previousChapter}
            disabled={activeChapter === 0}
          >
            ←
            <span>Previous</span>
          </button>

          <div className="story-progress">
            <span>
              {String(activeChapter + 1).padStart(2, "0")}
            </span>

            <div>
              <i
                style={{
                  width: `${((activeChapter + 1) / chapters.length) * 100}%`
                }}
              />
            </div>

            <span>
              {String(chapters.length).padStart(2, "0")}
            </span>
          </div>

          <button
            className="story-nav-button"
            onClick={nextChapter}
            disabled={activeChapter === chapters.length - 1}
          >
            <span>Next</span>
            →
          </button>

        </div>

      </div>
    </section>
  );
};

export default OurStory;
