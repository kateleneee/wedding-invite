import Box from "@mui/material/Box";
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
import "./PhotoGallery.css";

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

export default function PhotoGallery() {
  return (
    <section id="gallery" className="scrapbook-gallery">
      <div className="gallery-heading">
        <span className="eyebrow">OUR MOMENTS</span>

        <h3>
          A little glimpse
          <br />
          of us
        </h3>

        <p>A few little moments that brought us here.</p>
        <br />
      </div>

      <Box >
        <ImageList variant="masonry" cols={3} gap={10}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}`}
                alt={item.title}
                loading="eager"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </section>
  );
}

const itemData = [
  {
    img: photo1,
    title: "Bed",
  },
  {
    img: photo2,
    title: "Books",
  },
  {
    img: photo22,
    title: "Chairs",
  },

  {
    img: photo3,
    title: "Sink",
  },

  {
    img: photo4,
    title: "Kitchen",
  },
  {
    img: photo5,
    title: "Blinds",
  },
  {
    img: photo6,
    title: "Chairs",
  },
  //   {
  //     img: photo7,
  //     title: "Chairs",
  //   },
  {
    img: photo8,
    title: "Chairs",
  },

  {
    img: photo9,
    title: "Chairs",
  },
  {
    img: photo23,
    title: "Chairs",
  },
  {
    img: photo10,
    title: "Chairs",
  },
  {
    img: photo11,
    title: "Chairs",
  },
  //   {
  //     img: photo12,
  //     title: "Chairs",
  //   },
  {
    img: photo13,
    title: "Chairs",
  },
  {
    img: photo14,
    title: "Chairs",
  },
  {
    img: photo15,
    title: "Chairs",
  },
  {
    img: photo16,
    title: "Chairs",
  },
  // {
  //   img: photo17,
  //   title: "Chairs",
  // },
  {
    img: photo18,
    title: "Chairs",
  },
  {
    img: photo19,
    title: "Chairs",
  },
  {
    img: photo20,
    title: "Chairs",
  },
  {
    img: photo21,
    title: "Chairs",
  },

  {
    img: photo24,
    title: "Chairs",
  },
  {
    img: photo25,
    title: "Chairs",
  },
];
