import { useState } from "react";
import {
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

// import "./PhotoGallery.css";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";


const photos = [
  {
    src: photo1,
    caption: "Where it all began",
    rotation: "-4deg",
  },
  {
    src: photo2,
    caption: "Little adventures",
    rotation: "3deg",
  },
  {
    src: photo3,
    caption: "Our favorite people",
    rotation: "-2deg",
  },
  {
    src: photo4,
    caption: "Just us",
    rotation: "5deg",
  },
  {
    src: photo5,
    caption: "Making memories",
    rotation: "-3deg",
  },

];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <section id="gallery" className="scrapbook-gallery">

        <div className="gallery-heading">
          <span>OUR MOMENTS</span>

          <h2>
            A little glimpse
            <br />
            of us
          </h2>

          <p>
            A few little moments that brought us
            here.
          </p>
        </div>

        <div className="polaroid-container">

          {photos.map((photo, index) => (
            <button
              key={photo.src}
              className={`polaroid polaroid-${index + 1}`}
              style={{
                "--rotation": photo.rotation,
              }}
              onClick={() =>
                setSelectedPhoto(photo)
              }
            >
              <div className="polaroid-photo">
                <img
                  src={photo.src}
                  alt={photo.caption}
                />
              </div>

              <div className="polaroid-caption">
                {photo.caption}
              </div>

              <FavoriteRoundedIcon
                className="polaroid-heart"
              />
            </button>
          ))}

        </div>

      </section>

      <Dialog
        open={Boolean(selectedPhoto)}
        onClose={() => setSelectedPhoto(null)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              background: "#fffdf6",
              borderRadius: "20px",
              padding: "12px",
            },
          },
        }}
      >
        <IconButton
          onClick={() => setSelectedPhoto(null)}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            zIndex: 5,
            background: "#fffdf6",
          }}
        >
          <CloseRoundedIcon />
        </IconButton>

        {selectedPhoto && (
          <>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
            // className="lightbox-image"
            />

            <Typography
              sx={{
                fontFamily: "Cormorant Garamond",
                fontSize: "24px",
                textAlign: "center",
                padding: "12px",
              }}
            >
              {selectedPhoto.caption}
            </Typography>
          </>
        )}
      </Dialog>
    </>
  );
}