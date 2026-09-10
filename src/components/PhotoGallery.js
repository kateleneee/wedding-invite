import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
// import photo7 from "../assets/images/KDR-12.jpg";
import photo8 from "../assets/images/KDR-127.jpg";
import photo9 from "../assets/images/KDR-153.jpg";
import photo10 from "../assets/images/KDR-158.jpg";
import photo11 from "../assets/images/KDR-211.jpg";
// import photo12 from "../assets/images/KDR-256.jpg";
import photo13 from "../assets/images/KDR-266.jpg";
import photo14 from "../assets/images/KDR-273.jpg";
import photo15 from "../assets/images/KDR-293.jpg";
import photo16 from "../assets/images/KDR-32.jpg";
// import photo17 from "../assets/images/KDR-37.jpg";
import photo18 from "../assets/images/KDR-376.jpg";
import photo19 from "../assets/images/KDR-390.jpg";
import photo20 from "../assets/images/KDR-90.jpg";
import photo21 from "../assets/images/fb (1).jpg";
import photo22 from "../assets/images/fb (2).jpg";
import photo23 from "../assets/images/fb (3).jpg";
import photo24 from "../assets/images/fb (4).jpg";
import photo25 from "../assets/images/fb (5).jpg";
// import sketch1 from "../assets/images/sketch-1.png";
// import sketch2 from "../assets/images/sketch-2.png";
// import sketch3 from "../assets/images/sketch-3.png";

import "./PhotoGallery.css";

export default function PhotoGallery() {
  return (
    <section className="scrapbook-gallery">

      {/* HEADER */}
      <div className="gallery-heading">
        {/* <h3>Our Moments</h3> */}
        <span className="eyebrow">OUR MOMENTS</span>
        {/* <span className="eyebrow">OUR MOMENTS</span> */}
        {/* 
        <h3>
          A little glimpse
          <br />
          of us
        </h3> */}

        {/* <p>A few little moments that brought us here.</p> */}
      </div>

      {/* INTRO — BEFORE FIRST GALLERY */}
      <StoryText className="gallery-story-intro">
        <p>
          Maybe love was never about the grand gestures,
          perfect dates, or picture-perfect moments.
        </p>
      </StoryText>

      {/* GALLERY 1 */}
      <PhotoGalleryGrid photos={galleryOne} />

      {/* STORY 2 */}
      <StoryText>
        <p>
          Maybe it’s simply about{" "}
          <strong>enjoying the little things together</strong>
          —the random laughs, silly conversations,
          quiet moments, spontaneous adventures, and
          all the ordinary days that somehow become
          our favorite memories.
        </p>
      </StoryText>

      {/* GALLERY 2 */}
      <PhotoGalleryGrid photos={galleryTwo} />

      {/* STORY 3 */}
      <StoryText>
        <p>
          Because with you, even the simplest things
          feel special. A walk becomes an adventure.
          A boring day becomes a good day. And somehow,
          doing absolutely nothing feels like everything.
        </p>
        <br />
        <div className="gallery-story-divider" />
        <p className="gallery-story-emphasis">
          Everything is a little happier when I’m with you.
        </p>

      </StoryText>

      {/* GALLERY 3 */}
      <PhotoGalleryGrid photos={galleryThree} />

      {/* FINAL STORY */}
      <StoryText className="gallery-story-final">


        <p>
          Here’s to enjoying the little things, making
          memories out of the ordinary, and choosing
          each other through every season of life.
        </p>

        <p className="gallery-story-ending">
          Because at the end of the day,{" "}
          <strong>
            I don’t need much to be happy—just you beside me.
          </strong>
        </p>
      </StoryText>

    </section>
  );
}


/* --------------------------------
   GALLERY GRID
-------------------------------- */

function PhotoGalleryGrid({ photos }) {
  return (
    <ImageList
      variant="masonry"
      cols={3}
      gap={10}
      className="scrapbook-image-list"
    >
      {photos.map((item, index) => (
        <ImageListItem key={`${item.img}-${index}`}>
          <img
            src={item.img}
            alt={item.title}
            loading="eager"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


/* --------------------------------
   STORY TEXT
-------------------------------- */

function StoryText({ children, className = "" }) {
  return (
    <div className={`gallery-story ${className}`}>
      <span className="story-line story-line-left" />

      <div className="gallery-story-content">
        {children}
      </div>

      <span className="story-line story-line-right" />
    </div>
  );
}


/* --------------------------------
   GALLERY 1
-------------------------------- */

const galleryOne = [
  { img: photo1, title: "Our moments" },
  { img: photo2, title: "Our moments" },
  { img: photo22, title: "Our moments" },
  // { img: sketch1, title: "Our moments" },
  { img: photo3, title: "Our moments" },
  { img: photo4, title: "Our moments" },
  { img: photo5, title: "Our moments" },
];


/* --------------------------------
   GALLERY 2
-------------------------------- */

const galleryTwo = [
  { img: photo6, title: "Our moments" },
  { img: photo8, title: "Our moments" },
  { img: photo9, title: "Our moments" },
  { img: photo23, title: "Our moments" },
  { img: photo10, title: "Our moments" },
  { img: photo11, title: "Our moments" },
  { img: photo13, title: "Our moments" },
  { img: photo14, title: "Our moments" },
];


/* --------------------------------
   GALLERY 3
-------------------------------- */

const galleryThree = [
  { img: photo15, title: "Our moments" },
  { img: photo16, title: "Our moments" },
  { img: photo18, title: "Our moments" },
  { img: photo19, title: "Our moments" },
  { img: photo20, title: "Our moments" },
  { img: photo21, title: "Our moments" },
  { img: photo24, title: "Our moments" },
  { img: photo25, title: "Our moments" },
];